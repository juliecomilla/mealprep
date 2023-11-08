import React from'react';
import CocktailContainer from "./CocktailContainer";
import Search from './Search';
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function CocktailPage({ cocktails }) {
    
    function handleClick() {
        setIsButton(prevVal => !prevVal);
    };
      
    
    const { id } = useParams()


    return (
        <ul>
            {cocktails.map(page => (<li><NavLink exact to={`/cocktails/${page.idDrink}`}>{page.strDrink}</NavLink><img src={page.strDrinkThumb}></img></li>))}
        </ul>
    );
}


export default CocktailPage;