from random import choice as rc, randrange

from app import app
from models import db, User, MealReview, Meal, FavoriteCocktail, FavoriteMeal, Cocktail, CocktailReview
import requests

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

        print('Seeding meals')
        mealdata = requests.get('http://127.0.0.1:3000/meals')
        new_data = mealdata.json()
        new_meals = []
        for meal in new_data:
            new_meals.append(
                Meal(
                    name = meal.get('strMeal'),
                    base = meal.get('strCategory'),
                    origin = meal.get('strArea'),
                    instruction = meal.get('strInstructions'),
                    image = meal.get('strMealThumb'),
                    ingred1 = meal.get('strIngredient1'),
                    ingred2 = meal.get('strIngredient2'),
                    ingred3 = meal.get('strIngredient3'),
                    ingred4 = meal.get('strIngredient4'),
                    ingred5 = meal.get('strIngredient5'),
                    ingred6 = meal.get('strIngredient6'),
                    ingred7 = meal.get('strIngredient7'),
                    ingred8 = meal.get('strIngredient8'),
                    ingred9 = meal.get('strIngredient9'),
                    ingred10 = meal.get('strIngredient10'),
                    ingred11 = meal.get('strIngredient11'),
                    ingred12 = meal.get('strIngredient12'),
                    ingred13 = meal.get('strIngredient13'),
                    ingred14 = meal.get('strIngredient14'),
                    ingred15 = meal.get('strIngredient15'),
                    ingred16 = meal.get('strIngredient16'),
                    ingred17 = meal.get('strIngredient17'),
                    ingred18 = meal.get('strIngredient18'),
                    ingred19 = meal.get('strIngredient19'),
                    measure1 = meal.get('strMeasure1'),
                    measure2 = meal.get('strMeasure2'),
                    measure3 = meal.get('strMeasure3'),
                    measure4 = meal.get('strMeasure4'),
                    measure5 = meal.get('strMeasure5'),
                    measure6 = meal.get('strMeasure6'),
                    measure7 = meal.get('strMeasure7'),
                    measure8 = meal.get('strMeasure8'),
                    measure9 = meal.get('strMeasure9'),
                    measure10 = meal.get('strMeasure10'),
                    measure11 = meal.get('strMeasure11'),
                    measure12 = meal.get('strMeasure12'),
                    measure13 = meal.get('strMeasure13'),
                    measure14 = meal.get('strMeasure14'),
                    measure15 = meal.get('strMeasure15'),
                    measure16 = meal.get('strMeasure16'),
                    measure17 = meal.get('strMeasure17'),
                    measure18 = meal.get('strMeasure18'),
                    measure19 = meal.get('strMeasure19')
            ))
        db.session.add_all(new_meals)

        print('Seeding cocktails')
        cocktaildata = requests.get('http://127.0.0.1:3000/cocktails')
        new_data = cocktaildata.json()
        new_cocktails = []
        for cocktail in new_data:
            new_cocktails.append(
                Cocktail(
                    name = cocktail.get('strDrink'),
                    alcoholic = cocktail.get('strAlcoholic'),
                    instruction = cocktail.get('strInstructions'),
                    image = cocktail.get('strDrinkThumb'),
                    ingred1 = cocktail.get('strIngredient1'),
                    ingred2 = cocktail.get('strIngredient2'),
                    ingred3 = cocktail.get('strIngredient3'),
                    ingred4 = cocktail.get('strIngredient4'),
                    ingred5 = cocktail.get('strIngredient5'),
                    measure1 = cocktail.get('strMeasure1'),
                    measure2 = cocktail.get('strMeasure2'),
                    measure3 = cocktail.get('strMeasure3'),
                    measure4 = cocktail.get('strMeasure4'),
                    measure5 = cocktail.get('strMeasure5'),
            ))
        db.session.add_all(new_cocktails)

        print('adding to DB...')
        db.session.commit()

        print('Done seeding')
        # print('Clearing DB...')
        # User.query.delete()
        # Meal.query.delete()
        # MealReview.query.delete()
        # FavoriteCocktail.query.delete()
        # FavoriteMeal.query.delete()
        # Cocktail.query.delete()
        # CocktailReview.query.delete()

        # print('Seeding Users')
        # users = [
        #     User(username="Marge"),
        #     User(username="John"),
        #     User(username="Lucas"),
        #     User(username="Dom")
        # ]

        # for user in users:
        #     user.password_hash = 'abc'

        # db.session.add_all(users)

        # print('Seeding Meals')
        
        # meals = [
        #     Meal(
        #         name="Spaget",origin="Ita",base="Beef", instruction="Gravy"),
            
        # ]

        # db.session.add_all(meals)

        # print('Seeding Cocktails')
        # cocktails = [
        #     Cocktail(name="Ovaltine", base="Milk", instruction="Pull"),
        #     Cocktail(name="GamerS", base="Powder", instruction="Mix"),
        #     Cocktail(name="Magarita", base="Tequila", instruction="Shake"),
        #     Cocktail(name="Water", base="Water", instruction="Nothing")
        # ]

        # db.session.add_all(cocktails)
        # db.session.commit()

        # print('Finish Seeding!')
