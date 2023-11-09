from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from flask_bcrypt import Bcrypt
from sqlalchemy.ext.hybrid import hybrid_property


convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)
bcrypt = Bcrypt()

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ("-meal_reviews.user","-cocktail_reviews.user","-favorite_meals.user","-favorite_tails.user")
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String)

    favorite_meals = db.relationship('FavoriteMeal', back_populates="user")
    favorite_tails = db.relationship('FavoriteCocktail', back_populates="user")
    meal_reviews = db.relationship('MealReview', back_populates="user")
    cocktail_reviews = db.relationship('CocktailReview', back_populates="user")

    @hybrid_property
    def password_hash(self):
        return self._pass_hash
    
    @password_hash.setter
    def password_hash(self, new_pass):
        pass_hash = bcrypt.generate_password_hash(new_pass.encode('utf-8'))
        self._password_hash = pass_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash,
            password.encode('utf-8')
        )

    def __repr__(self):
        return self.username
     
class Meal(db.Model, SerializerMixin):
    __tablename__ = "meals"

    serialize_rules = ("-reviews.meal","-favorites.meal")

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    origin = db.Column(db.String, nullable=False)
    base = db.Column(db.String, nullable=False)
    instruction = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    ingred1 = db.Column(db.String)
    ingred2 = db.Column(db.String)
    ingred3 = db.Column(db.String)
    ingred4 = db.Column(db.String)
    ingred5 = db.Column(db.String)
    ingred6 = db.Column(db.String)
    ingred7 = db.Column(db.String)
    ingred8 = db.Column(db.String)
    ingred9 = db.Column(db.String)
    ingred10 = db.Column(db.String)
    ingred11 = db.Column(db.String)
    ingred12 = db.Column(db.String)
    ingred13 = db.Column(db.String)
    ingred14 = db.Column(db.String)
    ingred15 = db.Column(db.String)
    ingred16 = db.Column(db.String)
    ingred17 = db.Column(db.String)
    ingred18 = db.Column(db.String)
    ingred19 = db.Column(db.String)

    measure1 = db.Column(db.String)
    measure2 = db.Column(db.String)
    measure3 = db.Column(db.String)
    measure4 = db.Column(db.String)
    measure5 = db.Column(db.String)
    measure6 = db.Column(db.String)
    measure7 = db.Column(db.String)
    measure8 = db.Column(db.String)
    measure9 = db.Column(db.String)
    measure10 = db.Column(db.String)
    measure11 = db.Column(db.String)
    measure12 = db.Column(db.String)
    measure13 = db.Column(db.String)
    measure14 = db.Column(db.String)
    measure15 = db.Column(db.String)
    measure16 = db.Column(db.String)
    measure17 = db.Column(db.String)
    measure18 = db.Column(db.String)
    measure19 = db.Column(db.String)

    favorites = db.relationship('FavoriteMeal', back_populates="meal")
    reviews = db.relationship('MealReview', back_populates="meal")

    def __repr__(self):
        return self.name

class Cocktail(db.Model, SerializerMixin):
    __tablename__ = "cocktails"

    serialize_rules = ("-reviews.cocktail","-favorites.cocktail")

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    alcoholic = db.Column(db.String, nullable=False)
    instruction = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    ingred1 = db.Column(db.String)
    ingred2 = db.Column(db.String)
    ingred3 = db.Column(db.String)
    ingred4 = db.Column(db.String)
    ingred5 = db.Column(db.String)
    measure1 = db.Column(db.String)
    measure2 = db.Column(db.String)
    measure3 = db.Column(db.String)
    measure4 = db.Column(db.String)
    measure5 = db.Column(db.String)

    favorites = db.relationship('FavoriteCocktail', back_populates="cocktail")
    reviews = db.relationship('CocktailReview', back_populates="cocktail")

    def __repr__(self):
        return self.name

class FavoriteMeal(db.Model, SerializerMixin):
    __tablename__ = "favoritemeals"

    serialize_rules = ("-user.favorite_meals","-meal.favorites")

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    meal_id = db.Column(db.Integer, db.ForeignKey('meals.id'))

    user = db.relationship('User', back_populates="favorite_meals")
    meal = db.relationship('Meal', back_populates="favorites")

    def __repr__(self):
        return f"<Favorite {self.user.username} Meal {self.meal.name}>"

class FavoriteCocktail(db.Model, SerializerMixin):
    __tablename__ = "favoritecocktails"

    serialize_rules = ("-user.favorite_tails","-cocktail.favorites")

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    cocktail_id = db.Column(db.Integer, db.ForeignKey('cocktails.id'))

    user = db.relationship('User', back_populates="favorite_tails")
    cocktail = db.relationship('Cocktail', back_populates="favorites")

    def __repr__(self):
        return f"<Favorite {self.user.username} Cocktail {self.cocktail.name}>"

class MealReview(db.Model, SerializerMixin):
    __tablename__ = "mealreviews"

    serialize_rules = ("-user","-meal")

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    meal_id = db.Column(db.Integer, db.ForeignKey('meals.id'))
    comment = db.Column(db.String)

    user = db.relationship('User', back_populates="meal_reviews")
    meal = db.relationship('Meal', back_populates="reviews")

    def __repr__(self):
        return f"<Meal {self.meal.name} Review {self.user.username}>"

class CocktailReview(db.Model, SerializerMixin):
    __tablename__ = "cocktailreviews"

    serialize_rules = ("-user","-cocktail")

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    cocktail_id = db.Column(db.Integer, db.ForeignKey('cocktails.id'))
    comment = db.Column(db.String)

    user = db.relationship('User', back_populates="cocktail_reviews")
    cocktail = db.relationship('Cocktail', back_populates="reviews")

    def __repr__(self):
        return f"<Cocktail {self.cocktail.name} Review {self.user.username}>"