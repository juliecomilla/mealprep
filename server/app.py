#!/usr/bin/env python3

from models import db, User, Meal, Cocktail, FavoriteMeal, FavoriteCocktail, MealReview, CocktailReview
from flask_migrate import Migrate
from flask import Flask, request, make_response
from flask_restful import Api, Resource
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = os.environ.get("SECRET_KEY")


migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return '<h1>Code challenge</h1>'

@app.route('/users')
def users():
    body = [user.to_dict() for user in User.query.all]
    return body, 200

@app.route('/meals')
def meals():
    body = [meal.to_dict() for meal in Meal.query.all]
    return body, 200

@app.route('/cocktails')
def cocktails():
    body = [user.to_dict() for user in Cocktail.query.all]
    return body, 200

@app.route('/favmeals')
def favmeals():
    body = [user.to_dict() for user in FavoriteMeal.query.all]
    return body, 200

@app.route('/favcocks')
def favcocks():
    body = [user.to_dict() for user in FavoriteCocktail.query.all]
    return body, 200

@app.route('/mealrevs')
def mealrevs():
    body = [user.to_dict() for user in MealReview.query.all]
    return body, 200

@app.route('/cockrevs')
def cockrevs():
    body = [user.to_dict() for user in CocktailReview.query.all]
    return body, 200

if __name__ == '__main__':
    app.run(port=5555, debug=True)
