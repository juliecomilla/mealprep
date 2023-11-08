import React from'react';
import { NavLink, useParams } from "react-router-dom";

function MealsPage() {
    const [meals, setMeals]= useState([])

    useEffect(() => {    
        fetch("http://localhost:3000/meals")
        .then(resp => resp.json())
        .then((data)=> setMeals(data))
    
      }, []);
    


    return (
        <ul>
            {meals.map(page => (<li><NavLink exact to={`/meals/${page.idMeal}`}>{page.strMeal}</NavLink><img src={page.strMealThumb}></img></li>))}
        </ul>
    );
}


export default MealsPage;