import { useState } from 'react'
import {Routes,  Route } from 'react-router-dom'
import Food from './component/Food'
import Login from './component/Login'
import Meal from './component/Meal'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/login"
          element={<Login/>}
        />
        
        <Route path="/food"
          element={<Food/>}
        />
        
        <Route path="/meal"
          element={<Meal/>}
        />
      </Routes>
    </div>
  )
}

export default App
