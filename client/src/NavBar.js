import { Link } from "react-router-dom"

function NavBar({user, setUser}) {

    function handleLogout(){
        fetch("/logout", {
            method: "DELETE"
        }).then(() => {
            setUser(null)
        })
    }

    return (
        <div>
            <ul>
                <Link exact to="/">Home</Link>
                {user ? <Link to="/budgetform">Add Budget</Link> : null}
                {user ? <Link to="/view">View Budgets</Link> : null}
                {user ? <Link onClick={handleLogout} to="/">Logout</Link> : null}
            </ul>
        </div>
    )
}

export default NavBar