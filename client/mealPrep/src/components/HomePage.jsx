import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, useParams} from 'react-router-dom'
import Form from './Form';
import MealsContainer from './MealsContainer';
import Search from './Search';
import { useParams } from "react-router-dom";
import {BsHeartFill} from 'react-icons/bs'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  function MainPage() {
     const [pages, setPages]= useState(null);
  
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




  ,
)