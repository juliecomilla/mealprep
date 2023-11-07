import React from'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import {BsHeartFill} from 'react-icons/bs'



function UserProfile() {
   const [count, setCount] = useState(0);

   function handleClick() {
    setIsButton(prevVal => !prevVal);
};
 


const { id } = useParams()

useEffect(() => {
    fetch(`http://localhost:3000/candies/${id}`)
    .then((resp) => resp.json())
    .then((pages) => {
        setPages(pages)
 });
}, [id]);

if (!pages) {
    return <p>Loading...</p>
}
const { name, image, desc, price } = pages;


    return (
        <li className="candy_detail">
        <div className = "detail_card">
            <div className = "detail_name">{name}</div>
            <img src={image} alt={name}className="detail_image" />
            <div className="detail_description"> {desc} </div>
            <div className='favorite_text'>Favorite: {count} </div>
            <button onClick={() => setCount(count + 1)}>
               <BsHeartFill/>
               </button> 
            
            <div className= "detail_price"> ${price}</div>
            {isButton ? (
            <button 
            className="toggle_button add_button"
            onClick={handleClick}
            >
                Add
            </button>
            ) : (
                <button 
                className="toggle_button remove_button"
                onClick={handleClick}
                >
                Remove
                </button>
            )}
        </div>
     </li>
    );
}


export default CandyPage;