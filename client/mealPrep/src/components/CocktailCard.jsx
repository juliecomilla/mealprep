import { useState } from 'react';
import { Link } from 'react-router-dom';

function CocktailCard({ setUser, setCocktails, user, id, reviews, name, image, instruction, ingred1, ingred2, ingred3, ingred4, ingred5, measure1, measure2, measure3, measure4, measure5}) {

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
  
  function handleSubmit(event){
    event.preventDefault()
    console.log(user)
    const new_comment = {
      "user_id" : user.id,
      "cocktail_id" : id,
      "comment" : event.target.comment.value
    }
    
    fetch("http://127.0.0.1:5555/cockrevs",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(new_comment)
    })
    .then(resp => resp.json())
    
    fetch("http://127.0.0.1:5555/cocktails")
    .then(resp => resp.json())
    .then((data)=> setCocktails(data))

    fetch(`http://127.0.0.1:5555/users/${user.id}`)
    .then(resp => resp.json())
    .then((data)=> setUser(data))
    
  }
  
  function handleClick(e){
    const new_comment = {
      "user_id" : user.id,
      "cocktail_id" : id
    }

    console.log("adding favorite")
    
    fetch("http://127.0.0.1:5555/favcocks",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(new_comment)
    })
    .then(resp => resp.json())

    fetch("http://127.0.0.1:5555/cocktails")
    .then(resp => resp.json())
    .then((data)=> setCocktails(data))

    fetch(`http://127.0.0.1:5555/users/${user.id}`)
    .then(resp => resp.json())
    .then((data)=> setUser(data))

    console.log("finish adding favorite")
  }

  return(
    <div className="card border-success mb-3">

               <h5 className = "card-header bg-transparent border-success">{name}</h5>
               <div class="card-body text-success"></div>
              <img src={image} alt={name}className="cocktail_image" />
              <p className="cocktail_instructions"> {instruction} </p>
      
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
            <div>
              <h4>Comments</h4>
              {reviews ? reviews.map(review => (<p>{review.comment}</p>)): null}
            </div>
            <div>
                { user ? 
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="comment" placeholder="comment"></input>
                    <button type="submit">Submit</button>
                  </form>: null}
              </div>
              <div>
                { user ? 
                    <button onClick={handleClick}>Favorite</button>
                  : null}
              </div>
      </div>
  )
}


export default CocktailCard;