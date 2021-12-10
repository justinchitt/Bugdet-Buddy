import {Link} from "react-router-dom"

function UserHome({user, budgets}) {
    
if(!budgets[0]){
    return <h1>Loading</h1>
} else {

    let mostRecent = budgets[0]


    return (
        <div id="home">
            <h2>Welcome, {user.first_name}</h2>
            <p>What would you like to do today:</p>
            <ul>
                <Link to="/budgetform">Add a budget for this month</Link>
                <Link to="/view">View all your budgets</Link>
            </ul>
            {mostRecent?<h3>Your most recent budget for the month of {mostRecent.month.month} {mostRecent.month.year}:</h3>:<h3>You currently do not have any budgets <Link to="/budgetform">Add One</Link></h3>}
            {mostRecent?<div>
                <p>Income for the Month: ${mostRecent.monthly_income}</p>
                <p>Car Payment: ${mostRecent.car_payment}</p>
                <p>Car Insurance: ${mostRecent.car_insurance}</p>
                <p>Health Insurance: ${mostRecent.health_insurance}</p>
                <p>Mortgage/Rent: ${mostRecent.mortgage_or_rent}</p>
                <p>Internet: ${mostRecent.internet}</p>
                <p>Food/Groceries: ${mostRecent.food_or_groceries}</p>
                <p>Clothing: ${mostRecent.clothing}</p>
                <p>Utilities: ${mostRecent.utilities}</p>
                <p>Credit Card Debt: ${mostRecent.credit_card_debt}</p>
                <p>Cable: ${mostRecent.cable}</p>
                <p>Recreational: ${mostRecent.recreational}</p>
                <p>Savings/Investments: ${mostRecent.savings_or_investments}</p>
                <p>Other: ${mostRecent.other}</p>
                <p className="bold">Total Expenses: ${mostRecent.total_expenses}</p>
                <p className="bold">Remaining: ${mostRecent.left_over}</p>
            </div>:null}
        </div>
    )}
}

export default UserHome