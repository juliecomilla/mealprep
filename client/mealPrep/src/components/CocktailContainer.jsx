import React from'react';
import Search from './Search';
import {useState, useEffect} from "react";


function CocktailContainer({cocktails, setCocktails}) {
    const [search, setSearch] = useState("")
    
  

    return (
        <div>
            <Search setSearch={setSearch} />
            <ul className="cards">
                {filteredCocktails.map((cocktail) => {
                    return <CocktailCard key={cocktails.id} {...cocktails}/>
                })}
            </ul>
        </div>
    )
            }

export default CocktailContainer; 