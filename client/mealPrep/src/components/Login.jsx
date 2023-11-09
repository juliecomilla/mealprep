import { useState } from "react"
import {useNavigate} from "react-router-dom"

function Login() {
    const blankForm = {
        "username": "",
        "password": ""
    }
    const navigate = useNavigate()
    const [formData, setFormData] = useState(blankForm)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData, // this needs to happen first
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()

        fetch("http://127.0.0.1:5555/login", {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        navigate("/")
    
    }

    return(
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input name="username" onChange={handleChange} autoComplete="off" type="text" placeholder="Username"></input>
                <br/>
                <label htmlFor="password">Password:</label>
                <input name="password" onChange={handleChange} autoComplete="off" type="text" placeholder="Password"></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
  
}


export default Login;