import { NavLink, useParams } from "react-router-dom";
import { React, useState, useEffect } from 'react'
import CocktailCard from "./CocktailCard";

function CocktailPage() {
    const [cocktails, setCocktails]= useState([])

    useEffect(() => {
        fetch("http://localhost:3000/cocktails")
        .then(resp => resp.json())
        .then((data)=> setCocktails(data));
    },[])
    
    return (
        <ul><CocktailCard key={cocktails.idDrink} {...cocktails}/></ul>
    );
}


export default CocktailPage;