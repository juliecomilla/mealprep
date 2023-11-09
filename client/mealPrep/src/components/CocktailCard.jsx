import { useState } from 'react';
import { Link } from 'react-router-dom';


function CocktailCard({ strDrink, strDrinkThumb, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5}) {

  const [Ingredient1, setIngredient1] = useState(strIngredient1)
  const [Ingredient2, setIngredient2] = useState(strIngredient2)
  const [Ingredient3, setIngredient3] = useState(strIngredient3)
  const [Ingredient4, setIngredient4] = useState(strIngredient4)
  const [Ingredient5, setIngredient5] = useState(strIngredient5)
  const [Measure1, setMeasure1] = useState(strMeasure1)
  const [Measure2, setMeasure2] = useState(strMeasure2)
  const [Measure3, setMeasure3] = useState(strMeasure3)
  const [Measure4, setMeasure4] = useState(strMeasure4)
  const [Measure5, setMeasure5] = useState(strMeasure5)
  
  return(
    <div className="card border-success mb-3">

               <h5 className = "card-header bg-transparent border-success">{strDrink}</h5>
               <div class="card-body text-success"></div>
              <img src={strDrinkThumb} alt={strDrink}className="cocktail_image" />
              <p className="cocktail_instructions"> {strInstructions} </p>
      
            <div>


              <h4>Ingredients:</h4>
              <ul>
                {Ingredient1 ? <li><p>{Ingredient1} - {Measure1}</p></li> : null}
                {Ingredient2 ? <li><p>{Ingredient2} - {Measure2}</p></li> : null}
                {Ingredient3 ? <li><p>{Ingredient3} - {Measure3}</p></li> : null}
                {Ingredient4 ? <li><p>{Ingredient4} - {Measure4}</p></li> : null}
                {Ingredient5 ? <li><p>{Ingredient5} - {Measure5}</p></li> : null}
              </ul>
            </div>
      </div>
  )
}


export default CocktailCard;