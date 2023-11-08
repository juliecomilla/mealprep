import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import HomePage from './components/HomePage';
import MealsPage from './components/MealsPage';
import CocktailPage from './components/CocktailPage';
import Profile from './components/Profile';
import CocktailCard from './components/CocktailCard';
import MealsCard from './components/MealsCard'

function App() {
 

  return (
    <div>
      <Header/>
        <Routes>

        <Route path="/login"
        element={<Login />}
        />
       

        <Route path="/homepage"
         element={<HomePage />}
         />
    

        <Route path="/profile"
          element={<Profile/>}
        />
        
      `<Route exact path='/cocktail/:id'
          element={<CocktailCard/>}
        /> 
            
        <Route path='/meals/"id'
          element={<MealsCard/>}
        />

        <Route exact path="/"
          element={<CocktailPage/>}
        />

        <Route exact path="/"
          element={<MealsPage/>}
        />

      </Routes>
    </div>
  );
};
    


export default App
