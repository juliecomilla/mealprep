from random import choice as rc, randrange

from app import app
from models import db, User, MealReview, Meal, FavoriteCocktail, FavoriteMeal, Cocktail, CocktailReview

if __name__ == '__main__':
    with app.app_context():
        print('Clearing DB...')
        User.query.delete()
        Meal.query.delete()
        MealReview.query.delete()
        FavoriteCocktail.query.delete()
        FavoriteMeal.query.delete()
        Cocktail.query.delete()
        CocktailReview.query.delete()

        print('Seeding Users')
        users = [
            User(username="Marge"),
            User(username="John"),
            User(username="Lucas"),
            User(username="Dom")
        ]

        for user in users:
            user.password_hash = 'abc'

        db.session.add_all(users)

        print('Seeding Meals')
        meals = [
            Meal(name="Spaget",origin="Ita",base="Beef", instruction="Gravy"),
            Meal(name="Grill Cheese",origin="USA",base="Cheese", instruction="Grill"),
            Meal(name="Halal",origin="Egy",base="Chicken", instruction="Burn"),
            Meal(name="Sandwich",origin="CDN",base="Bread", instruction="Fire")
        ]

        db.session.add_all(meals)

        print('Seeding Cocktails')
        cocktails = [
            Cocktail(name="Ovaltine", base="Milk", instruction="Pull"),
            Cocktail(name="GamerS", base="Powder", instruction="Mix"),
            Cocktail(name="Magarita", base="Tequila", instruction="Shake"),
            Cocktail(name="Water", base="Water", instruction="Nothing")
        ]

        db.session.add_all(cocktails)

        print('Seeding Favorite Meals')
        fav_meals = [
            FavoriteMeal(user_id=1, meal_id=2),
            FavoriteMeal(user_id=1, meal_id=3),
            FavoriteMeal(user_id=2, meal_id=2),
            FavoriteMeal(user_id=2, meal_id=1)
        ]

        db.session.add_all(fav_meals)

        print('Seeding Favorite Cocktails')
        fav_cocktails = [
            FavoriteCocktail(user_id=3, cocktail_id=2),
            FavoriteCocktail(user_id=3, cocktail_id=4),
            FavoriteCocktail(user_id=4, cocktail_id=2),
            FavoriteCocktail(user_id=4, cocktail_id=3)
        ]

        db.session.add_all(fav_cocktails)

        print('Seeding Meal Reviews')
        meal_rev = [
            MealReview(user_id=1, meal_id=1, comment="mid"),
            MealReview(user_id=1, meal_id=3, comment="top"),
            MealReview(user_id=2, meal_id=2, comment="bottom"),
            MealReview(user_id=2, meal_id=3, comment="best")
        ]

        db.session.add_all(meal_rev)

        print('Seeding Cocktail Reviews')
        cock_rev = [
            CocktailReview(user_id=3, cocktail_id=1, comment="bottom"),
            CocktailReview(user_id=3, cocktail_id=4, comment="top"),
            CocktailReview(user_id=4, cocktail_id=4, comment="best"),
            CocktailReview(user_id=4, cocktail_id=3, comment="mid")
        ]

        db.session.add_all(cock_rev)
        db.session.commit()

        print('Finish Seeding!')
