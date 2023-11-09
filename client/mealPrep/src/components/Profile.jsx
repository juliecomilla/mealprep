import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"


export default function Profile({ user }) {
    const navigate = useNavigate()
    useEffect(()=>{

        if(!user){
            navigate("/signup")
        }
    },[])
        return(
        <div>
            {user ?
            <div>
                <div>
                    <h1>{user.username ? user.username : null}</h1>
                </div>
                <div>
                    <ul><h2>Favorite Meals</h2>
                        {user.favorite_meals ? user.favorite_meals.map(meal => (
                            <li><Link to={`/meals/${meal.meal.name}`}>{meal.meal.name}</Link></li>
                            ))
                        : null}
                    </ul>
                    <ul><h2>Favorite Cocktails</h2>
                        {user.favorite_tails ? user.favorite_tails.map(cocktail => (
                            <li><Link to={`/cocktails/${cocktail.cocktail.name}`}>{cocktail.cocktail.name}</Link></li>))
                            // console.log(cocktail)))
                            : null}
                    </ul>
                </div>
                <div>
                    <ul><h2>Meal reviews</h2>
                        {user.meal_reviews ? user.meal_reviews.map(review => (<li>{review.comment}</li>)): null}
                    </ul>
                    <ul><h2>Cocktail reviews</h2>
                        {user.cocktail_reviews ? user.cocktail_reviews.map(review => (<li>{review.comment}</li>)): null}
                    </ul>
                </div>
            </div>
            : null}
        </div>

    )

}