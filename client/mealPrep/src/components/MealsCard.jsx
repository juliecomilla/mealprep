import { useState } from 'react';
import { Link } from 'react-router-dom';


function MealCard({ name, image, instruction, ingred1, ingred2, ingred3, ingred4, ingred5, ingred6, ingred7, ingred8, ingred9, ingred10, ingred11, ingred12, ingred13, ingred14, ingred15, ingred16, ingred17, ingred18, ingred19, measure1, measure2, measure3, measure4, measure5, measure6, measure7, measure8, measure9, measure10, measure11, measure12, measure13, measure14, measure15, measure16, measure17, measure18, measure19}) {

    const [Ingredient1, setIngredient1] = useState(ingred1)
    const [Ingredient2, setIngredient2] = useState(ingred2)
    const [Ingredient3, setIngredient3] = useState(ingred3)
    const [Ingredient4, setIngredient4] = useState(ingred4)
    const [Ingredient5, setIngredient5] = useState(ingred5)
    const [Ingredient6, setIngredient6] = useState(ingred6)
    const [Ingredient7, setIngredient7] = useState(ingred7)
    const [Ingredient8, setIngredient8] = useState(ingred8)
    const [Ingredient9, setIngredient9] = useState(ingred9)
    const [Ingredient10, setIngredient10] = useState(ingred10)
    const [Ingredient11, setIngredient11] = useState(ingred11)
    const [Ingredient12, setIngredient12] = useState(ingred12)
    const [Ingredient13, setIngredient13] = useState(ingred13)
    const [Ingredient14, setIngredient14] = useState(ingred14)
    const [Ingredient15, setIngredient15] = useState(ingred15)
    const [Ingredient16, setIngredient16] = useState(ingred16)
    const [Ingredient17, setIngredient17] = useState(ingred17)
    const [Ingredient18, setIngredient18] = useState(ingred18)
    const [Ingredient19, setIngredient19] = useState(ingred19)

    const [Measure1, setMeasure1] = useState(measure1)
    const [Measure2, setMeasure2] = useState(measure2)
    const [Measure3, setMeasure3] = useState(measure3)
    const [Measure4, setMeasure4] = useState(measure4)
    const [Measure5, setMeasure5] = useState(measure5)
    const [Measure6, setMeasure6] = useState(measure6)
    const [Measure7, setMeasure7] = useState(measure7)
    const [Measure8, setMeasure8] = useState(measure8)
    const [Measure9, setMeasure9] = useState(measure9)
    const [Measure10, setMeasure10] = useState(measure10)
    const [Measure11, setMeasure11] = useState(measure11)
    const [Measure12, setMeasure12] = useState(measure12)
    const [Measure13, setMeasure13] = useState(measure13)
    const [Measure14, setMeasure14] = useState(measure14)
    const [Measure15, setMeasure15] = useState(measure15)
    const [Measure16, setMeasure16] = useState(measure16)
    const [Measure17, setMeasure17] = useState(measure17)
    const [Measure18, setMeasure18] = useState(measure18)
    const [Measure19, setMeasure19] = useState(measure19)
    
    return(
      <div className = "detail_card">
              <div className = "cocktail_name">{name}
                <img src={image} alt={name}className="cocktail_image" />
                <p className="cocktail_instructions"> {instruction} </p>
              </div>
              <div>
                <h4>Ingredients</h4>
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