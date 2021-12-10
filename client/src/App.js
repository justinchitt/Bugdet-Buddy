import NavBar from "./NavBar";
import UserHome from "./UserHome";
import BudgetForm from "./BudgetForm";
import SignupLogin from "./SignupLogin";
import ViewAll from "./ViewAll";
import {useState, useEffect} from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  const [budgets, setBudgets] = useState([])

  useEffect(fetchUser, [])
  
  function fetchUser() {
    fetch("/me")
    .then(resp => {
      if (resp.ok) {
        resp.json().then(user => setUser(user))
      }
    })
  }

  useEffect(fetchBudgets, [])

  function fetchBudgets() {
    fetch(`/budgets/`)
    .then(resp => resp.json())
    .then(setBudgets)
  }

  function handleDeleteItem(deleted){
    console.log(deleted)
    const updatedBudgets = budgets.filter((budget) => budget.id !== deleted.id)
    setBudgets(updatedBudgets)
}

let todaysDate = new Date()
let monthsInNumbers = String(todaysDate.getMonth())
let year = String(todaysDate.getFullYear())

let monthsInWords = {
  "0": "January",
  "1": "February",
  "2": "March",
  "3": "April",
  "4": "May",
  "5": "June",
  "6": "July",
  "7": "August",
  "8": "September",
  "9": "October",
  "10": "November",
  "11": "December",
}

let todaysMonth = monthsInWords[monthsInNumbers]


    if (!user) {
      return (
        <>
        <SignupLogin setUser={setUser}/>
        </>
      )
    }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/">
            {user ? <UserHome user={user} budgets={budgets}/> : <SignupLogin setUser={setUser}/>}
          </Route>
          <Route exact path="/budgetform">
            <BudgetForm  user={user} setBudgets={setBudgets}todaysMonth={todaysMonth} year={year}/>
          </Route>
          <Route exact path="/view">
            <ViewAll budgets={budgets} handleDeleteItem={handleDeleteItem} year={year} todaysMonth={todaysMonth} setBudgets={setBudgets}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
