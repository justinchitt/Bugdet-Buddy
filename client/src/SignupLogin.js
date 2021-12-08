import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function SignupLogin({setUser}) {
    const [wasClicked, setWasClicked] = useState(false)

    function handleClick() {
        setWasClicked(current => !current)
    }

    return (
        <>
            {wasClicked ? <Signup setUser={setUser} />:<Login setUser={setUser} />}

            <button onClick={handleClick}>{!wasClicked?"Sign Up":"Already have an account?"}</button>
        </>
    )
}

export default SignupLogin