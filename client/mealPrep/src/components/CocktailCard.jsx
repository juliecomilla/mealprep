import { useState } from 'react';
import { Link } from 'react-router-dom';

function CocktailCard({ strDrink,strDrinkThumb, strInstructions }) {
  return(
    <div className = "detail_card">
            <div className = "cocktail_name">{strDrink}</div>
            <img src={strDrinkThumb} alt={strDrink}className="cocktail_image" />
            <p className="cocktail_instructions"> {strInstructions} </p>
            {/* <div className='favorite_text'>Favorite: {count} </div> */}
            
            
            {/* <div className= "detail_ingredients"> </div>
            {isButton ? (
            <button 
            className="toggle_button add_button"
            onClick={handleClick}
            >
                Like
            </button>
            ) : (
                <button 
                className="toggle_button remove_button"
                onClick={handleClick}
                >
                Unlike
                </button>
            )} */}
        </div>
  )
}


export default CocktailCard;