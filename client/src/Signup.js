import { useState } from 'react'

function Signup({setWasClicked}) {
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
            setSignupData({
                username:  "",
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                password_confirmation: ""
            })
            setWasClicked(current => !current)
        })
    }

    return (
        <>
            <form onSubmit={handleSignup}>
                <label>Username: </label> <input type="text" name="username" onChange={handleChange} value={signupData.username} required></input>
                <label>First Name: </label> <input type="text" name="first_name" onChange={handleChange} value={signupData.first_name} required></input>
                <label>Last Name: </label> <input type="text" name="last_name" onChange={handleChange} value={signupData.last_name} required></input>
                <label>Email: </label> <input type="text" name="email" onChange={handleChange} value={signupData.email} required></input>
                <label>Password: </label> <input type="password" name="password" onChange={handleChange} value={signupData.password} required></input>
                <label>Confirm Password: </label> <input type="password" name="password_confirmation" onChange={handleChange} value={signupData.password_confirmation} required></input>
                <button type="submit" disabled={disable}>{!disable?"Create Profile":"Loading..."}</button>
            </form>
        </>
    )
}

export default Signup