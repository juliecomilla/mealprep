import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header" class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <h1> Meal and Drink Pal</h1>
            <ul className="navbar">
            <li><a href="/homepage">HomePage</a></li>
            <li><a href="/cocktails/">Cocktails</a></li>
            <li><a href="/meals/">Meals</a></li>
            <li><a href="/profile">Profile</a></li>          

            </ul>
        </header>
    )
}