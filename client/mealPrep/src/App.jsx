import { useState, useEffect } from 'react'
import './App.css'
import { Switch, Route} from "react-router-dom";
import Header from './Header';
import Login from './Login';
import HomePage from './HomePage';
import MealsPage from './MealPage';
import CocktailsPage from './CocktailsPage';
import MealsContainer from './MealsContainer';
import CocktailContainer from './CocktailContainer';
import UserProfile from './Profile';

function App() {
  const [count, setCount] = useState(0)
  const [cocktails, setCocktails]= useState([])
  const [meals, setMeals]= useState([])

  useEffect(() => {
    fetch("http://localhost:5173/")
    .then(resp => resp.json())
    .then((data)=> setMealPrep(data));


  }, []);

  return (
    <div>
      <Header/>
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/homepage">
          <HomePage />
        </Route>

        <Route path="/profile">
          <UserProfile/>
        </Route>


        <Route path="/meals/:id">
          <MealsPage/>
        </Route>

        <Route path="/cocktails/:id">
          <CocktailsPage/>
        </Route>
 
        <Route exact path="/">
        <MealsContainer meals={meals} setMeals={setMeals} />
        </Route>

        <Route exact path="/">
        <CocktailContainer cocktails={cocktails} setCocktails={setCocktails} />
        </Route>

      </Switch>
    </div>
  );
};
    


export default App
