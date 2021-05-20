from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.String(80), nullable=False) #agregar el valor false por defecto
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(80), nullable=False)
    name = db.Column(db.String(80), nullable=False)
    last_name  = db.Column(db.String(120), nullable=False)
    personal_id =db.Column(db.String(120), nullable=True)
    # service_id = db.Column(db.Integer, db.ForeignKey('services.id'))
    # province = db.Column(db.String(120), nullable=False)
    # canton = db.Column(db.String(120), nullable=False)
    profile_picture = db.Column(db.String(500), nullable=True)
    description = db.Column(db.String(500), nullable=True)
    criminal_record = db.Column(db.PickleType, nullable=True)   
    is_active = db.Column(db.Boolean(), nullable=True)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Categories(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    categorie_name = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return '<Categories %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "categorie_name": self.categorie_name,
            # do not serialize the password, its a security breach
        }

class Services(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    categorie_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    service_name = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<Services %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "service_name ": self.service_name,
            # do not serialize the password, its a security breach
        }

class Vendor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    categorie_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'))
    province = db.Column(db.String(120), nullable=False)
    canton = db.Column(db.String(120), nullable=False)
    # comment_id = db.Column(db.String(80), db.ForeignKey('comments.id'))
    # score =

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

# class Comments(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.String(80), nullable=False)
#     role = db.Column(db.String(80), nullable=False)
#     comment = db.Column(db.String(500), nullable=True)


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



