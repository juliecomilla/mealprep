import { useState } from "react"
import {useNavigate} from "react-router-dom"

export default function Signup(){
    const blankForm = {
        "username": "",
        "password": "",
        "first_name": "",
        "last_name": "",
        "email": ""
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
        console.log(formData)
        fetch("http://127.0.0.1:5555/signup", {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json)
        // .then(data => console.log(data))
        
        setFormData(blankForm)
        navigate("/login")
    }

    return (
        <div>
            <h1>SIGNUP</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input name="username" onChange={handleChange} autoComplete="off" type="text" placeholder="Username"></input>
                <br/>
                <label htmlFor="password">Password:</label>
                <input name="password" onChange={handleChange} autoComplete="off" type="text" placeholder="Password"></input>
                <br/>
                <label htmlFor="first_name">First Name:</label>
                <input name="first_name" onChange={handleChange} autoComplete="off" type="text" placeholder="First Name"></input>
                <br/>
                <label htmlFor="last_name">Last Name:</label>
                <input name="last_name" onChange={handleChange} autoComplete="off" type="text" placeholder="Last Name"></input>
                <br/>
                <label htmlFor="email">Email:</label>
                <input name="email" onChange={handleChange} autoComplete="off" type="text" placeholder="Email"></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}