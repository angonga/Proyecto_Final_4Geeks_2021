"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Services
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
# from flask_mail import Mail, Message
import random
import string
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

api = Blueprint('api', __name__)
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

# REGISTER
@api.route("/register", methods=["POST"])
def register():
    role = request.json['role']
    email = request.json['email']
    phone = request.json['phone']
    name = request.json['name']
    last_name = request.json['last_name']
    password = request.json['password']
    # inputs validation
    if not email:
        return jsonify({"msg": "Por favor ingrese su correo electrónico"}), 400
    if not phone:
        return jsonify({"msg": "Por favor ingrese su número de teléfono"}), 400
    if not name:
        return jsonify({"msg": "Por favor ingrese su nombre"}), 400
    if not last_name:
        return jsonify({"msg": "Por favor ingrese sus apellidos"}), 400
    if not password:
        return jsonify({"msg": "Por favor ingrese su contraseña"}), 400
    # busca usuario en BBDD
    user = User.query.filter_by(email=email).first()
    if user:
        # the user was found on the database with the same role added
        return jsonify({"msg": "El usuario ya se encuentra registrado"}), 409
    else:
        # here will be created the user != to vendor, with all the basic information
        print("-----------")
        print(role)
        print("-----------")
        is_active=True
        if role ==True:
            role="vendor"
            is_active=False
        else:
            role="client"
        user = User()
        user.role = role
        user.phone = phone
        user.name = name
        user.last_name = last_name
        user.email = email
        user.password = password 
        user.is_active = is_active
    db.session.add(user)    
    db.session.commit()
    return jsonify({"msg": "Su registro ha sido activado de forma exitosa"}), 200

@api.route("/update_profile", methods=["PUT"])
@jwt_required()
def update_profile():
    current_user = get_jwt_identity()
    user = User.query.filter_by(id=current_user).first()
    if not user:
        return jsonify({"msg": "El usuario no existe"}), 404
    if user.role == 'vendor':
        #falta agregar los servicios colocados en el checkbox del formulario
        personal_id = request.json['personal_id']
        description = request.json['description']
        # profile_picture  = request.json['profile_picture']
        # criminal_record = request.json['criminal_record']
        if not description:
            is_active = False
            return jsnoify({"msg": "Para la activación de su perfil, requerimos que ingrese una breve descripción de su experiencia y de sus trabajos realizados"}), 400
        # if not profile_picture:
        #     is_active = False
        #     return jsnoify({"msg": "Para la activación de su perfil, requerimos que por favor adjunte una foto de perfil, idealmente con fondo blanco"}), 400
        # if not criminal_record:
        #     is_active = False
        #     return jsnoify({"msg": "Su hoja de delincuencia debe ser adjuntada en formato PDF para la activación de su perfil"}), 400
        # once the vendor has completed his information, his profile will be activated
        user.personal_id  = personal_id 
        user.description = description
        # user.is_active = False
    db.session.commit()
    return jsonify({"msg": "Sus datos han sido actualizados de forma éxitosa"}), 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # valida si estan vacios los ingresos
    if not email:
        return jsonify({"msg": "Por favor ingrese su correo electrónico"}), 400
    if not password:
        return jsonify({"msg": "Por favor ingrese su contraseña"}), 400
    # para proteger contraseñas usar hashed_password
    # busca usuario en BBDD
    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({"msg": "La contraseña o el correo ingresado es invalido"}), 401
    else:
        # crear token
        my_token = create_access_token(identity=user.id)
        return jsonify({"token": my_token})

@api.route("/protected", methods=["GET", "POST"])
# protege ruta con esta funcion
@jwt_required()
def protected():
    # busca la identidad del token
    current_id = get_jwt_identity()
    # busca usuarios en base de datos
    user = User.query.get(current_id)
    print(user)
    return jsonify({"id": user.id, "email": user.email}), 200

@api.route("/me", methods=["GET"])
# protege ruta con esta funcion
@jwt_required()
def show():
    # busca la identidad del token
    current_user = get_jwt_identity()
    # busca usuarios en base de datos
    print(current_user)
    user = User.query.filter_by(id=current_user).first()
    print(user)
    return jsonify({"user": user.serialize()}), 200

@api.route("/resetpassword", methods=["POST"])
def resetpassword():
    email = request.json['email']
    old_password = request.json['old_password']
    new_password = request.json['new_password']
    confirmed_password = request.json['confirmed_password']
    # inputs validation
    if not email:
        return jsonify({"msg": "Por favor ingrese su correo electrónico"}), 400
    if not old_password:
        return jsonify({"msg": "Por favor ingrese su contraseña actual"}), 400
    if old_password == new_password:
        return jsonify({"msg": "La nueva contraseña debe ser distinta"}), 400
    if new_password != confirmed_password:
        return jsonify({"msg": "Ambas contraseñas deben ser iguales"}), 400
    # if not confirm_password:
    #     return jsonify({"msg": "Por favor confirme su contraseña"}), 400
    # if not confirm_password:
    #     return jsonify({"msg": "Por favor confirme su contraseña"}), 400
    # busca usuario en BBDD
    user = User.query.filter_by(email=email).first()
    user.password = new_password  
    db.session.commit()
    return jsonify({"msg": "Su clave ha sido actualizada con éxito"}), 200

#RECUPERACION CONTRASEÑA OLVIDADA 
@api.route("/forgotpassword", methods=["POST"])
def forgotpassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8))
    # recover_password = "ABFDI01zsfkj47"
    if not recover_email:
        return jsonify({"msg": "Por favor ingrese su correo electrónico"}), 400
    user = User.query.filter_by(email=recover_email).first()
    if user is None:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    user.password = recover_password
    db.session.commit()
    # using SendGrid's Python Library
    # https://github.com/sendgrid/sendgrid-python
    message = Mail(
        from_email='andre.gari.2991@gmail.com',
        to_emails=recover_email,
        subject='Contraseña Temporal para inicio de Sesión en Calle4',
        # html_content='<strong>Su contraseña temporal es la siguiente:</strong>'+recover_password+'<br/><strong>Por favor ingrese a este link:</strong>'+os.environ.get('BACKEND_URL')+ "/resetPassword")
        html_content='<strong>Su contraseña temporal es la siguiente:</strong>'+recover_password+'<br/><strong>Por favor ingrese a este link:</strong>'+"https://3000-brown-vulture-ydybxsfp.ws-us04.gitpod.io/resetPassword")
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        # print(response.body)
        # print(response.headers)
    except Exception as e:
        print(e.body)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200

#SERVICES
@api.route("/services", methods=["GET"])
def getservices():
    services = Services.query.all()
    services = list(map(lambda x: x.serialize(), services))
    return jsonify({"servicios":services}), 200

