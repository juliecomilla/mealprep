import { Link } from "react-router-dom";

export default function Header({user, setUser}) {
    function handleClick(){
        if(user){
            setUser(null)
        }
        else {}
    }
    return (
        <header className="header">
            <h1> Meal & Drink Pal</h1>
            <ul className="navbar">
                {user ? <li>{user.username}</li> : null}
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/cocktails/">Cocktails</Link></li>
                <li><Link to="/meals/">Meals</Link></li>
                <li><Link to="/profile">Profile</Link></li>          
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                {user ? <li onClick={handleClick}><Link >Logout</Link></li> : null}
            </ul>
        </header>
    )
}