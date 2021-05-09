"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

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
    confirm_password = request.json['confirm_password']
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
    if not confirm_password:
        return jsonify({"msg": "Por favor confirme su contraseña"}), 400
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
        if role ==True:
            role="vendor"
        else:
            role="client"
        user = User()
        user.role = role
        user.phone = phone
        user.name = name
        user.last_name = last_name
        user.email = email
        user.password = password
        user.confirm_password = confirm_password   
        user.is_active = True   
    db.session.add(user)    
    db.session.commit()
    return jsonify({"msg": "Su registro ha sido activado de forma exitosa"}), 200

@api.route("/update_profile", methods=["PUT"])
def update_profile():
    email = request.json['email']
    if email is None:
        return jsonify({"msg": "Por favor ingrese su correo electrónico"}), 404
    if role == 'vendor':
        #falta agregar los servicios colocados en el checkbox del formulario
        description = request.json['description']
        profile_picture  = request.json['profile_picture']
        criminal_record = request.json['criminal_record']
        if not description:
            is_active = False
            return jsnoify({"msg": "Para la activación de su perfil, requerimos que ingrese una breve descripción de su experiencia y de sus trabajos realizados"}), 400
        if not profile_picture:
            is_active = False
            return jsnoify({"msg": "Para la activación de su perfil, requerimos que por favor adjunte una foto de perfil, idealmente con fondo blanco"}), 400
        if not criminal_record:
            is_active = False
            return jsnoify({"msg": "Su hoja de delincuencia debe ser adjuntada en formato PDF para la activación de su perfil"}), 400
        # once the vendor has completed his information, his profile will be activated
        user = User.query.filter_by(email=email).first()
        user.is_active = is_active
        user.description = description
        user.profile_picture = profile_picture
        user.criminal_record = criminal_record  
    db.session.commit()
    return jsonify({"msg": "Sus datos han sido actualizados de forma éxitosa"}), 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # valida si estan vacios los ingresos
    if email is None:
        return jsonify({"msg": "Por favor ingrese su correo electrónico"}), 400
    if password is None:
        return jsonify({"msg": "Por favor ingrese su contraseña"}), 400
    # para proteger contraseñas usar hashed_password
    # busca usuario en BBDD
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "La contraseña o el correo ingresado es invalido"}), 401
    else:
        # crear token
        my_token = create_access_token(identity=user.id)
        return jsonify({"token": my_token})