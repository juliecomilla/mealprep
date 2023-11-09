import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import HomePage from './components/HomePage';
import MealsPage from './components/MealsPage';
import MealCard from './components/MealsCard';
import CocktailPage from './components/CocktailPage';
import Profile from './components/Profile';
import CocktailContainer from './components/CocktailContainer';
import MealsContainer from './components/MealsContainer';
import CocktailCard from './components/CocktailCard';
import Signup from './components/Signup';


function App() {
  const [count, setCount] = useState(0)
  const [cocktails, setCocktails]= useState([])
  const [meals, setMeals]= useState([])
  const [user, setUser]= useState(null)
  
  
  
  useEffect(() => {
    fetch("http://127.0.0.1:5555/cocktails")
    .then(resp => resp.json())
    .then((data)=> setCocktails(data))

    fetch("http://127.0.0.1:5555/meals")
    .then(resp => resp.json())
    .then((data)=> setMeals(data))
  }, []);

  return (
    <div>
      <Header user={user} setUser={setUser}/>
        <Routes>

        <Route path="/login"
          element={<Login user={user} setUser={setUser}/>}
        />

        <Route path="/signup"
          element={<Signup />}
        />

        <Route path="/"
          element={<HomePage meals={meals} cocktails={cocktails}/>}
        />

        <Route path="/profile"
          element={<Profile user={user}/>}
        />

        {meals.map(meal => {
          return(
            <Route exact path={`/meals/${meal.name}`}
              element={<MealCard setUser={setUser} setMeals={setMeals} user={user} key={meal.name} {...meal}/>}
            />
          )
        })}

        <Route path="/meals/"
          element={<MealsPage meals={meals}/>}
        />

        {cocktails.map(cocktail => {
            return(
              <Route exact path={`/cocktails/${cocktail.id}`}
                element={<CocktailCard setUser={setUser} setCocktails={setCocktails} user={user} key={cocktail.name} {...cocktail}/>}
              />
            )
        })}

        <Route path="/cocktails/"
          element={<CocktailPage cocktails={cocktails}/>} 
        />
        
        {/* <Route exact path="/"
          element={<CocktailContainer/>}
        />

        <Route exact path="/"
          element={<MealsContainer/>}
        /> */}

      </Routes>
    </div>
  );
};
    


export default App
