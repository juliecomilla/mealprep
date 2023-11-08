import React from'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom';



function MealsPage({ meals }) {
   
    return (
        <ul>
            {meals.map(page => (<li><NavLink exact to={`/meals/${page.idMeal}`}>{page.strMeal}</NavLink><img src={page.strMealThumb}></img></li>))}
        </ul>
    )
}
 



export default MealsPage; 