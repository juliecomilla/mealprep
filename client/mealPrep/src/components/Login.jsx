import { useState } from "react"

function Login() {
    
    return(
        <div>
            <h1>LOGIN</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input name="username" autoComplete="false" type="text" placeholder="Username"></input>
                <br/>
                <label htmlFor="password">Password:</label>
                <input name="password" autoComplete="false" type="text" placeholder="Password"></input>
            </form>
        </div>
    )
  
}


export default Login;