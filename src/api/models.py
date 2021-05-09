from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.String(80), nullable=False) #agregar el valor false por defecto
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(80), nullable=False)
    confirm_password = db.Column(db.String(80), nullable=False)
    name = db.Column(db.String(80), nullable=False)
    last_name  = db.Column(db.String(120), nullable=False)
    profile_picture = db.Column(db.String(500), nullable=True)
    description = db.Column(db.String(500), nullable=True)
    criminal_record = db.Column(db.PickleType, nullable=True)   
    is_active = db.Column(db.Boolean(), nullable=True)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

# class Categories(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     categorie_name = db.Column(db.String(80), nullable=False)

#     def __repr__(self):
#         return '<User %r>' % self.username

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }

# class Service(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     categorie_id = db.Column(db.String(80), nullable=False)
#     service_name = db.Column(db.String(120), nullable=False)

#     def __repr__(self):
#         return '<User %r>' % self.username

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }

# class Vendor(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     categories = db.Column(db.String(80), nullable=False)
#     services = db.Column(db.String(120), nullable=False)
#     coverage_area = db.Column(db.String(120), nullable=False)
#     working_queue = 
#     score =


#     def __repr__(self):
#         return '<User %r>' % self.username

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }

# class Client(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.String(80), nullable=False)
#     services = db.Column(db.String(120), nullable=False)
#     coverage_area = db.Column(db.String(120), nullable=False)
#     score=


#     def __repr__(self):
#         return '<User %r>' % self.username

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }

# class Client(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.String(80), nullable=False)
#     services = db.Column(db.String(120), nullable=False)
#     coverage_area = db.Column(db.String(120), nullable=False)


#     def __repr__(self):
#         return '<User %r>' % self.username

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }


