import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function SignupLogin({setUser}) {
    const [wasClicked, setWasClicked] = useState(false)

    function handleClick() {
        setWasClicked(current => !current)
    }

    return (
        <div id="loginsignup">
        <h1>Budget Buddy</h1>
        {wasClicked ? <Signup setWasClicked={setWasClicked}/>:<Login setUser={setUser} />}
        <div id="signup">
            <button onClick={handleClick}>{!wasClicked?"Sign Up":"Already have an account?"}</button>
            </div>
        </div>
    )
}

export default SignupLogin