import { useState } from 'react';
import { Link } from 'react-router-dom';

function CocktailCard({ name, image, instruction, ingred1, ingred2, ingred3, ingred4, ingred5, measure1, measure2, measure3, measure4, measure5}) {

  const [Ingredient1, setIngredient1] = useState(ingred1)
  const [Ingredient2, setIngredient2] = useState(ingred2)
  const [Ingredient3, setIngredient3] = useState(ingred3)
  const [Ingredient4, setIngredient4] = useState(ingred4)
  const [Ingredient5, setIngredient5] = useState(ingred5)
  const [Measure1, setMeasure1] = useState(measure1)
  const [Measure2, setMeasure2] = useState(measure2)
  const [Measure3, setMeasure3] = useState(measure3)
  const [Measure4, setMeasure4] = useState(measure4)
  const [Measure5, setMeasure5] = useState(measure5)
  
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
              </ul>
            </div>
      </div>
  )
}


export default CocktailCard;