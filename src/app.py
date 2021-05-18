"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User
from api.routes import api
from api.admin import setup_admin
#from models import Person
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity, create_access_token
# from flask_mail import Mail, Message
# import smtplib, ssl



ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_SECRET_KEY")
jwt = JWTManager(app)

# Send by email a random temp password
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 587
# app.config['MAIL_USE_TLS'] = True
# app.config['MMAIL_USE_SSL'] = True
# app.config['MAIL_DEBUG'] = False
# app.config['MAIL_USERNAME'] = 'calle4cr2021@gmail.com'
# app.config['MAIL_PASSWORD'] = 'C@lle42021$$'
# app.config['MAIL_DEFAULT_SENDER'] = 'calle4cr2021@gmail.com'
# app.config['MAIL_MAX_EMAILS'] = None
# # app.config['MAIL_SUPPRESS_SEND'] =
# app.config['MAIL_ASCII_ATTACHMENTS'] = False
# mail_settings = {
#     "MAIL_SERVER": smtplib.SMTP('smtp-mail.outlook.com'),
#     "MAIL_PORT":  587,
#     "MAIL_USE_SSL": True,
#     "MAIL_USE_TLS": True,
#     "MAIL_USERNAME":  'calle4cr2021@outlook.com',
#     "MAIL_PASSWORD": 'C@lle42021$$',
#     "MAIL_DEFAULT_SENDER": 'calle4cr2021@outlook.com'
# }
# app.config.update(mail_settings)
# mail = Mail(app)
# app.mail= mail

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
