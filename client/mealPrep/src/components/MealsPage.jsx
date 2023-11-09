import React from'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom';



function MealsPage({ meals }) {
   
    return (

    <div className="x">

        {meals.map(page => (

        <div className="y">    
            <NavLink className= "meal-main-name"exact to={`/meals/${page.idMeal}`}>
            {page.strMeal}
            </NavLink>
        <img className="cocktailmain_image" src={page.strMealThumb} alt={page.strMeal} />
        </div>
        ))}

    </div>


    );
}
 



export default MealsPage; 