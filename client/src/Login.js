import { useState } from 'react'

function Login({setUser}) {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    function handleChange(e){
        let key = e.target.name
        let value = e.target.value
        setLoginData({...loginData, [key]:value})
        console.log(loginData)
    }

    function handleLogin(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginData)
            })
        .then(resp => resp.json())
        .then(user => setUser(user))
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <label>Username:</label> <input name="username" type="text" value={loginData.username} onChange={handleChange} required></input>
                <label>Password:</label> <input name="password" type="password" value={loginData.password} onChange={handleChange} required></input>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login