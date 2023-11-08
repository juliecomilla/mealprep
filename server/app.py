#!/usr/bin/env python3

from models import db, User, Meal, Cocktail, FavoriteMeal, FavoriteCocktail, MealReview, CocktailReview
from flask_migrate import Migrate
from flask import Flask, request, make_response, session
from flask_restful import Api, Resource
from flask_cors import CORS

import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = os.environ.get("secret_key")
CORS(app)



migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return '<h1>Phase 4 Group Project</h1>'

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    try:
        new_user = User(username=data['username'])
        new_user.password_hash = data['password']
    except ValueError as e:
        return {'error':str(e)}, 400
    db.session.add(new_user)
    db.session.commit()

    return {'message': f'{new_user.username} added'}, 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter(User.username == data['username']).first()

    if not user:
        return {'message': 'user not found'}, 404
    
    if user.authenticate(data['password']):
        session['user_id'] = user.id
        return {'message': 'login success'}, 201
    else:
        return {'message': 'login failed'}, 401
    
@app.route('/logout', methods=['DELETE'])
def logout():
    session.pop('user_id')
    return {'message':"logged out"}, 200

@app.route('/meals', methods=['GET'])
def all_meals():
    body = [meal.to_dict() for meal in Meal.query.all()]
    return body, 200

@app.route('/cocktails', methods=['GET'])
def all_cocktails():
    body = [user.to_dict() for user in Cocktail.query.all()]
    return body, 200

@app.route('/favmeals', methods=['POST'])
def all_favmeals():
    data = request.get_json()

    try:
        new_fav = FavoriteMeal(user_id = data.get('user_id'), meal_id = data.get('meal_id'))
    except ValueError as e:
        return {'message':str(e)}, 400
    
    db.session.add(new_fav)
    db.session.commit()

    return new_fav.to_dict(), 201

@app.route('/favmeals/<int:id>', methods=['GET','DELETE'])
def favmeal_by_id(id):
    body = FavoriteMeal.query.filter(FavoriteMeal.id == id).first()

    if not body:
        return {'message':'favorite meal not found'}, 404
    if request.method == 'GET':
        return body.to_dict(), 200
    elif request.method == 'DELETE':
        db.session.delete(body)
        db.session.commit()
        return {}, 204
        

@app.route('/favcocks', methods=['POST'])
def all_favcocks():
    data = request.get_json()

    try:
        new_fav = FavoriteCocktail(user_id = data.get('user_id'), cocktail_id = data.get('meal_id'))
    except ValueError as e:
        return {'message':str(e)}, 400
    
    db.session.add(new_fav)
    db.session.commit()

    return new_fav.to_dict(), 201

@app.route('/favcocks/<int:id>', methods=['GET','DELETE'])
def favcock_by_id(id):
    body = FavoriteCocktail.query.filter(FavoriteCocktail.id == id).first()

    if not body:
        return {'message':'favorite cocktail not found'}, 404
    if request.method == 'GET':
        return body.to_dict(), 200
    elif request.method == 'DELETE':
        db.session.delete(body)
        db.session.commit()
        return {}, 204

@app.route('/mealrevs', methods=['POST'])
def all_mealrevs():
    data = request.get_json()

    try:
        new_rev = MealReview(user_id = data.get('user_id'), meal_id = data.get('meal_id'), comment = data.get('comment'))
    except ValueError as e:
        return {'message':str(e)}, 400
    
    db.session.add(new_rev)
    db.session.commit()

    return new_rev.to_dict(), 201

@app.route('/mealrevs/<int:id>', methods=['GET','PATCH'])
def mealrev_by_id(id):
    body = MealReview.query.filter(MealReview.id == id).first()

    if not body:
        return {'message':'meal review not found'}, 404
    if request.method == 'GET':
        return body.to_dict(), 200
    elif request.method == 'PATCH':
        data = request.get_json()

        for field in data:
            setattr(body, field, data[field])
        
        db.session.add(body)
        db.session.commit()
        return {}, 200

@app.route('/cockrevs', methods=['POST'])
def all_cockrevs():
    data = request.get_json()
    
    try:
        new_rev = CocktailReview(user_id = data.get('user_id'), cocktail_id = data.get('cocktail_id'), comment = data.get('comment'))
    except ValueError as e:
        return {'message':str(e)}, 400
    
    db.session.add(new_rev)
    db.session.commit()

    return new_rev.to_dict(), 201

@app.route('/mealrevs/<int:id>', methods=['GET','PATCH'])
def cockrev_by_id(id):
    body = CocktailReview.query.filter(CocktailReview.id == id).first()

    if not body:
        return {'message':'cocktail review not found'}, 404
    if request.method == 'GET':
        return body.to_dict(), 200
    elif request.method == 'PATCH':
        data = request.get_json()

        for field in data:
            setattr(body, field, data[field])
        
        db.session.add(body)
        db.session.commit()
        return {}, 200

if __name__ == '__main__':
    app.run(port=5555, debug=True)
