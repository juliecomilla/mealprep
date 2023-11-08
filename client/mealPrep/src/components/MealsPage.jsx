import React from'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom';



function MealsPage({ meals }) {
   
    return (
        <ul>
            {meals.map(page => (<li><NavLink exact to={`/meals/${page.name}`}>{page.name}</NavLink><img src={page.image}></img></li>))}
        </ul>
    )
}
 



export default MealsPage; 