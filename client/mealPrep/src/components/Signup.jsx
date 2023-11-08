import { useState } from "react"

export default function Signup(){
    const blankForm = {
        "username": "",
        "password": "",
        "confirmpassword":"",
        "first_name": "",
        "last_name": "",
        "email": ""
    }
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

    }

    return (
        <div>
            <h1>SIGNUP</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input name="username" autoComplete="false" type="text" placeholder="Username"></input>
                <br/>
                <label htmlFor="password">Password:</label>
                <input name="password" autoComplete="false" type="text" placeholder="Password"></input>
                <br/>
                <label htmlFor="confirmpassword">Confirm Password:</label>
                <input name="confirmpassword" autoComplete="false" type="text" placeholder="Password"></input>
                <br/>
                <label htmlFor="first_name">First Name:</label>
                <input name="first_name" autoComplete="false" type="text" placeholder="First Name"></input>
                <br/>
                <label htmlFor="last_name">Last Name:</label>
                <input name="last_name" autoComplete="false" type="text" placeholder="Last Name"></input>
                <br/>
                <label htmlFor="email">Email:</label>
                <input name="email" autoComplete="false" type="text" placeholder="Email"></input>
            </form>
        </div>
    )
}