import { useState } from 'react'

function Signup({setUser}) {
    const [signupData, setSignupData] = useState({
        username:  "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })
    const [disable, setDisable] = useState(false)

    function handleChange(e) {
        let key = e.target.name
        let value = e.target.value
        setSignupData({...signupData, [key]: value})
    }

    function handleSignup(e) {
        e.preventDefault()
        setDisable(true)
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(signupData)
        })
        .then(resp => resp.json())
        .then(user => {
            setUser(user)
            setSignupData({
                username:  "",
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                password_confirmation: ""
            })
        })
    }

    return (
        <>
            <form onSubmit={handleSignup}>
                <label>Username:</label> <input type="text" name="username" onChange={handleChange} value={signupData.username}></input>
                <label>First Name:</label> <input type="text" name="first_name" onChange={handleChange} value={signupData.first_name}></input>
                <label>Last Name:</label> <input type="text" name="last_name" onChange={handleChange} value={signupData.last_name}></input>
                <label>Email:</label> <input type="text" name="email" onChange={handleChange} value={signupData.email}></input>
                <label>Password:</label> <input type="password" name="password" onChange={handleChange} value={signupData.password}></input>
                <label>Confirm Password:</label> <input type="password" name="password_confirmation" onChange={handleChange} value={signupData.password_confirmation}></input>
                <button type="submit" disabled={disable}>{!disable?"Create Profile":"Loading..."}</button>
            </form>
        </>
    )
}

export default Signup