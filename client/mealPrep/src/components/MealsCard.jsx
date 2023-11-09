import { useState } from 'react';
import { Link } from 'react-router-dom';


function MealCard({ strMeal, strMealThumb, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19}) {

    const [Ingredient1, setIngredient1] = useState(strIngredient1)
    const [Ingredient2, setIngredient2] = useState(strIngredient2)
    const [Ingredient3, setIngredient3] = useState(strIngredient3)
    const [Ingredient4, setIngredient4] = useState(strIngredient4)
    const [Ingredient5, setIngredient5] = useState(strIngredient5)
    const [Ingredient6, setIngredient6] = useState(strIngredient6)
    const [Ingredient7, setIngredient7] = useState(strIngredient7)
    const [Ingredient8, setIngredient8] = useState(strIngredient8)
    const [Ingredient9, setIngredient9] = useState(strIngredient9)
    const [Ingredient10, setIngredient10] = useState(strIngredient10)
    const [Ingredient11, setIngredient11] = useState(strIngredient11)
    const [Ingredient12, setIngredient12] = useState(strIngredient12)
    const [Ingredient13, setIngredient13] = useState(strIngredient13)
    const [Ingredient14, setIngredient14] = useState(strIngredient14)
    const [Ingredient15, setIngredient15] = useState(strIngredient15)
    const [Ingredient16, setIngredient16] = useState(strIngredient16)
    const [Ingredient17, setIngredient17] = useState(strIngredient17)
    const [Ingredient18, setIngredient18] = useState(strIngredient18)
    const [Ingredient19, setIngredient19] = useState(strIngredient19)

    const [Measure1, setMeasure1] = useState(strMeasure1)
    const [Measure2, setMeasure2] = useState(strMeasure2)
    const [Measure3, setMeasure3] = useState(strMeasure3)
    const [Measure4, setMeasure4] = useState(strMeasure4)
    const [Measure5, setMeasure5] = useState(strMeasure5)
    const [Measure6, setMeasure6] = useState(strMeasure6)
    const [Measure7, setMeasure7] = useState(strMeasure7)
    const [Measure8, setMeasure8] = useState(strMeasure8)
    const [Measure9, setMeasure9] = useState(strMeasure9)
    const [Measure10, setMeasure10] = useState(strMeasure10)
    const [Measure11, setMeasure11] = useState(strMeasure11)
    const [Measure12, setMeasure12] = useState(strMeasure12)
    const [Measure13, setMeasure13] = useState(strMeasure13)
    const [Measure14, setMeasure14] = useState(strMeasure14)
    const [Measure15, setMeasure15] = useState(strMeasure15)
    const [Measure16, setMeasure16] = useState(strMeasure16)
    const [Measure17, setMeasure17] = useState(strMeasure17)
    const [Measure18, setMeasure18] = useState(strMeasure18)
    const [Measure19, setMeasure19] = useState(strMeasure19)
    
    return(
      <div className="card border-success mb-3">
              <h5 className="card-header bg-transparent border-success">{strMeal}</h5>
              <div class="card-body text-success"></div>
                <img src={strMealThumb} alt={strMeal}className="meal_image" />
                <p className="meal_instructions"> {strInstructions} </p>
            
              <div>
                
                
                <h4>Ingredients:</h4>
                <ul>
                  {Ingredient1 ? <li><p>{Ingredient1} - {Measure1}</p></li> : null}
                  {Ingredient2 ? <li><p>{Ingredient2} - {Measure2}</p></li> : null}
                  {Ingredient3 ? <li><p>{Ingredient3} - {Measure3}</p></li> : null}
                  {Ingredient4 ? <li><p>{Ingredient4} - {Measure4}</p></li> : null}
                  {Ingredient5 ? <li><p>{Ingredient5} - {Measure5}</p></li> : null}
                  {Ingredient6 ? <li><p>{Ingredient6} - {Measure6}</p></li> : null}
                  {Ingredient7 ? <li><p>{Ingredient7} - {Measure7}</p></li> : null}
                  {Ingredient8 ? <li><p>{Ingredient8} - {Measure8}</p></li> : null}
                  {Ingredient9 ? <li><p>{Ingredient9} - {Measure9}</p></li> : null}
                  {Ingredient10 ? <li><p>{Ingredient10} - {Measure10}</p></li> : null}
                  {Ingredient11 ? <li><p>{Ingredient11} - {Measure11}</p></li> : null}
                  {Ingredient12 ? <li><p>{Ingredient12} - {Measure12}</p></li> : null}
                  {Ingredient13 ? <li><p>{Ingredient13} - {Measure13}</p></li> : null}
                  {Ingredient14 ? <li><p>{Ingredient14} - {Measure14}</p></li> : null}
                  {Ingredient15 ? <li><p>{Ingredient15} - {Measure15}</p></li> : null}
                  {Ingredient16 ? <li><p>{Ingredient16} - {Measure16}</p></li> : null}
                  {Ingredient17 ? <li><p>{Ingredient17} - {Measure17}</p></li> : null}
                  {Ingredient18 ? <li><p>{Ingredient18} - {Measure18}</p></li> : null}
                  {Ingredient19 ? <li><p>{Ingredient19} - {Measure19}</p></li> : null}
                </ul>
              </div>
              </div>
    )
  }
  
  
  export default MealCard;