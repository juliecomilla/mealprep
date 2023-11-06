from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin


convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ("-meal_reviews","-cocktail_reviews","-favorite_meals","-favorite_tails")
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    _pass_hash = db.Column(db.String)

    favorite_meals = db.relationship('FavoriteMeal', back_populates="user")
    favorite_tails = db.relationship('FavoriteCocktail', back_populates="user")
    meal_reviews = db.relationship('MealReview', back_populates="user")
    cocktail_reviews = db.relationship('CocktailReview', back_populates="user")

    def __repr__(self):
        return self.username
     
class Meal(db.Model, SerializerMixin):
    __tablename__ = "meals"

    serialize_rules = ("-reviews","-favorites")

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    origin = db.Column(db.String, nullable=False)
    base = db.Column(db.String, nullable=False)
    instruction = db.Column(db.String, nullable=False)
    image = db.Column(db.String)

    favorites = db.relationship('FavoriteMeal', back_populates="meal")
    reviews = db.relationship('MealReview', back_populates="meal")

    def __repr__(self):
        return self.name

class Cocktail(db.Model, SerializerMixin):
    __tablename__ = "cocktails"

    serialize_rules = ("-reviews","-favorites")

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    base = db.Column(db.String, nullable=False)
    instruction = db.Column(db.String, nullable=False)
    image = db.Column(db.String)

    favorites = db.relationship('FavoriteCocktail', back_populates="cocktail")
    reviews = db.relationship('CocktailReview', back_populates="cocktail")

    def __repr__(self):
        return self.name

class FavoriteMeal(db.Model, SerializerMixin):
    __tablename__ = "favoritemeals"

    serialize_rules = ("-user","-meal")

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    meal_id = db.Column(db.Integer, db.ForeignKey('meals.id'))

    user = db.relationship('User', back_populates="favorite_meals")
    meal = db.relationship('Meal', back_populates="favorites")

    def __repr__(self):
        return f"<Favorite {self.user.username} Meal {self.meal.name}>"

class FavoriteCocktail(db.Model, SerializerMixin):
    __tablename__ = "favoritecocktails"

    serialize_rules = ("-user","-cocktail")

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