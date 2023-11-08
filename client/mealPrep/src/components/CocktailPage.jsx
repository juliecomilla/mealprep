import React from'react';
import CocktailContainer from "./CocktailContainer";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function CocktailPage({ cocktails }) {
    
    function handleClick() {
        setIsButton(prevVal => !prevVal);
    };
      
    
    const { id } = useParams()


    return (
        <ul>
            {cocktails.map(page => (<li><NavLink exact to={`/cocktails/${page.id}`}>{page.name}</NavLink><img src={page.image}></img></li>))}
        </ul>
    );
}


export default CocktailPage;