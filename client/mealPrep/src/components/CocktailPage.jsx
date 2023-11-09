import React from'react';
import Search from './Search';
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function CocktailPage({ cocktails }) {
    
    return (

    <div className="x">
        
            {cocktails.map(page => (

            <div className="y">
                 <NavLink className= "drink-main-name"exact to={`/cocktails/${page.idDrink}`}>
                    {page.strDrink}
                 </NavLink>
             <img className="cocktailmain_image" src={page.strDrinkThumb} alt={page.strDrink} />
            </div>
            ))}

        
    </div>





    );
}


export default CocktailPage;