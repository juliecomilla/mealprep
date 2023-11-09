import React from'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom';



function MealsPage({ meals }) {
   
    return (
        <ul className="x">
            {meals.map(page => (
            <li className="y"><NavLink className= "meal-main-name"exact to={`/meals/${page.name}`}>{page.name}
            </NavLink>
            <img className="cocktailmain_image" src={page.image} alt={page.name}></img></li>))}
        </ul> 
    )
}
 



export default MealsPage; 