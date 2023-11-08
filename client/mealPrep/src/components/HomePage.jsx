import { useState } from "react"
import MealCard from "./MealsCard"
import CocktailCard from "./CocktailCard"

function HomePage({meals, cocktails}) {
    const rmeal = parseInt(Math.random()*100) % meals.length
    const rcock = parseInt(Math.random()*100) % cocktails.length

    return (
        <div>
            <MealCard {...meals[rmeal]} />
            <CocktailCard {...cocktails[rcock]} />
        </div>
    )
    
  
}


export default HomePage;