import React from'react';
import CocktailContainer from "./CocktailContainer";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function CocktailPage({ cocktails }) {
    
    return (
        <ul className="x">
            {cocktails.map(page => (<li className="y"><NavLink className= "drink-main-name" exact to={`/cocktails/${page.id}`}>{page.name}</NavLink>
            <img className="cocktailmain_image" src={page.image} alt={page.name}></img></li>))}
        </ul>
    );
}


export default CocktailPage;