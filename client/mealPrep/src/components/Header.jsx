import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <h1> Meal and Drink Pal</h1>
            <ul className="navbar">
            <li><a href="/">HomePage</a></li>
            <li><a href="/cocktails/">Cocktails</a></li>
            <li><a href="/meals/">Meals</a></li>
            <li><a href="/profile">Profile</a></li>          
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>

            </ul>
        </header>
    )
}