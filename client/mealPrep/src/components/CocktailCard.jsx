import { useState } from 'react';
import { Link } from 'react-router-dom';


function CocktailCard({ strDrink,strDrinkThumb, strInstructions }) {


  return(
    <div className = "detail_card">
            <div className = "cocktail_name">{strDrink}</div>
            <img src={strDrinkThumb} alt={strDrink}className="cocktail_image" />
            <p className="cocktail_instructions"> {strInstructions} </p>
            
        </div>
  )
}


export default CocktailCard;