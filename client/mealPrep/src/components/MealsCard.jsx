import { useState } from 'react';
import { Link } from 'react-router-dom';


function MealCard({id, name, image, instructions,ingredients, measure}) {
    const [likeMeals, setLikeMeals]= useState(true);
    
    function handleClick() {
        setLikeMeals(prevVal => !prevVal);
    };

    return (
        <li className="card_details">
        <div className = "meal_card">
            <h3 className = "meal_name">{name}</h3>
            <Link to={`/meals/${id}`}>
            <img src={image} 
            alt={name}
            className="candy_image"
            />
            </Link>
            <h3 className="cocktail_instructions"> {instructions} </h3>
            <h3 className="cocktail_ingredients"> {ingredients} </h3>
            <div className= "cocktail_measure">${measure}</div>
            {likeCocktails ? (
            <button 
            className="primary"
            onClick={handleClick}>Like</button>
            ) : (
                <button onClick={handleClick}>Unlike</button>
            )}
        </div>
     </li>
    );
}


export default CocktailCard;