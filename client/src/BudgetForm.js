import {useState} from "react"

function BudgetForm({user, setBudgets, todaysMonth, year}) {
    const [formData, setFormData] = useState({
        monthly_income: 0,
        mortgage_or_rent: 0,
        car_payment: 0,
        car_insurance: 0,
        health_insurance: 0,
        internet: 0,
        food_or_groceries: 0,
        clothing: 0,
        utilities: 0,
        credit_card_debt: 0,
        cable: 0,
        recreational: 0,
        savings_or_investments: 0,
        other: 0,
        total_expenses: 0,
        left_over: 0,
    })

    function handleChange(e) {
        let key = e.target.name
        let value = Math.round(100*(parseFloat(e.target.value)))/100
        setFormData({...formData, [key]:value})
    }
    
    let totalExpenses = formData.mortgage_or_rent + formData.car_payment + formData.car_insurance + formData.health_insurance + formData.internet + formData.food_or_groceries + formData.clothing + formData.utilities + formData.credit_card_debt + formData.cable + formData.recreational + formData.savings_or_investments + formData.other
    totalExpenses = Math.round(100*totalExpenses)/100
    let copyOfFormData = {...formData}
    copyOfFormData.total_expenses = totalExpenses


    copyOfFormData["user_id"] = user.id


    copyOfFormData["year"] = year
    copyOfFormData["month"] = todaysMonth

    let remaining = Math.round(100*(formData.monthly_income - totalExpenses))/100
    copyOfFormData.left_over = remaining

    console.log(copyOfFormData)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/budgets", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(copyOfFormData)
        })
        .then(resp => resp.json())
        .then(budget => {
            setBudgets(current => {
                if (current){
                return ([budget, ...current])
            } else {
                return([current])
            }
            })
            setFormData({
                monthly_income: 0,
                mortgage_or_rent: 0,
                car_payment: 0,
                car_insurance: 0,
                health_insurance: 0,
                internet: 0,
                food_or_groceries: 0,
                clothing: 0,
                utilities: 0,
                credit_card_debt: 0,
                cable: 0,
                recreational: 0,
                savings_or_investments: 0,
                other: 0,
                total_expenses: 0,
                left_over: 0
            })
        })
    }

    return(
        <div>
            <h2 id="h2">Budget for {copyOfFormData.month} {copyOfFormData.year}</h2>
            {remaining > 0 ? null : remaining === 0 ? null : <p id="error">Your remaining amount is negative or invalid, please re-evaluate your expenses, income or use a 0</p>}
            <form id="budgetform" onSubmit={handleSubmit}>
                <label>Monthly Income: $ <input name="monthly_income" type="number" min="0" step="0.01" value={formData.monthly_income} onChange={handleChange} required></input></label>
                <label>Mortgage/Rent: $ <input name="mortgage_or_rent" type="number" min="0" step="0.01" value={formData.mortgage_or_rent} onChange={handleChange} required></input></label>
                <label>Car Payment: $ <input name="car_payment" type="number" min="0" step="0.01" value={formData.car_payment} onChange={handleChange} required></input></label>
                <label>Car Insurance: $<input name="car_insurance" type="number" min="0" step="0.01" value={formData.car_insurance} onChange={handleChange} required></input></label>
                <label>Health Insurance: $ <input name="health_insurance" type="number" min="0" step="0.01" value={formData.health_insurance} onChange={handleChange} required></input></label>
                <label>Utilities: $ <input name="utilities" type="number" min="0" step="0.01" value={formData.utilities} onChange={handleChange} required></input></label>
                <label>Credit Card Debt: $ <input name="credit_card_debt" type="number" min="0" step="0.01" value={formData.credit_card_debt} onChange={handleChange} required></input></label>
                <label>Cable: $ <input name="cable" type="number" min="0" step="0.01" value={formData.cable} onChange={handleChange} required></input></label>
                <label>Internet: $ <input name="internet" type="number" min="0" step="0.01" value={formData.internet} onChange={handleChange} required></input></label>
                <label>Food/Groceries: $ <input name="food_or_groceries" type="number" min="0" step="0.01" value={formData.food_or_groceries} onChange={handleChange} required></input></label>
                <label>Clothing: $ <input name="clothing" type="number" min="0" step="0.01" value={formData.clothing} onChange={handleChange} required></input></label>
                <label>Recreational: $ <input name="recreational" type="number" min="0" step="0.01" value={formData.recreational} onChange={handleChange} required></input ></label>
                <label>Savings/Investments: $ <input name="savings_or_investments" type="number" min="0" step="0.01" value={formData.savings_or_investments} onChange={handleChange} required></input></label>
                <label>Other: $ <input name="other" type="number" min="0" step="0.01" value={formData.other} onChange={handleChange} required></input></label>
                <p className="bold">Total Expenses: {copyOfFormData.total_expenses || copyOfFormData.total_expenses === 0 ? `$${copyOfFormData.total_expenses}` : "Calculating..."}</p>
                <p className="bold">Remaining: {copyOfFormData.left_over || copyOfFormData.left_over === 0 ? `$${copyOfFormData.left_over}` : "Calculating..."}</p>
                {remaining > 0 ? <button type="submit">Submit</button> : null}
            </form>
        </div>
    )
}

{/* <p id="error">Your remaining amount is negative or invalid, please re-evaluate your expenses, income or use a 0</p> */}

export default BudgetForm