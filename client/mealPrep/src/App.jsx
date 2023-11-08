import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import HomePage from './components/HomePage';
import MealsPage from './components/MealsPage';
import CocktailPage from './components/CocktailPage';
import Profile from './components/Profile';
import CocktailContainer from './components/CocktailContainer';
import MealsContainer from './components/MealsContainer';
import CocktailCard from './components/CocktailCard';

function App() {
  const [count, setCount] = useState(0)
  const [cocktails, setCocktails]= useState([])
  const [meals, setMeals]= useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cocktails")
    .then(resp => resp.json())
    .then((data)=> setCocktails(data));


  }, []);

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
        

        <Route path="/meals/"
          element={<MealsPage/>}
        />
        {cocktails.map(cocktail => {
            return(
              <Route exact path={`/cocktails/${cocktail.idDrink}`}
                element={<CocktailCard {...cocktail}/>}
              />
            )
            })}

        <Route path="/cocktails/"
          element={<CocktailPage cocktails={cocktails}/>} 
        />
        
        <Route exact path="/"
          element={<CocktailContainer/>}
        />

        <Route exact path="/"
          element={<MealsContainer/>}
        />

      </Routes>
    </div>
  );
};
    


export default App
