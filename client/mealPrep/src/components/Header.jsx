import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <h1> Meal and Drink Pal</h1>
            <ul className="navbar">
            <li><a href="/homepage">HomePage</a></li>
            <li><a href="/cocktails/:id">Cocktails</a></li>
            <li><a href="/meals/:id">Meals</a></li>
            <li><a href="/profile">Profile</a></li>          

            </ul>
        </header>
    )
}