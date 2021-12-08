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
        let value = parseFloat(e.target.value)
        setFormData({...formData, [key]:value})
    }
    
    let totalExpenses = formData.mortgage_or_rent + formData.car_payment + formData.car_insurance + formData.health_insurance + formData.internet + formData.food_or_groceries + formData.clothing + formData.utilities + formData.credit_card_debt + formData.cable + formData.recreational + formData.savings_or_investments + formData.other   
    let copyOfFormData = {...formData}
    copyOfFormData.total_expenses = totalExpenses


    copyOfFormData["user_id"] = user.id


    copyOfFormData["year"] = year
    copyOfFormData["month"] = todaysMonth

    let remaining = formData.monthly_income - totalExpenses
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
            setBudgets(current => ([budget, ...current]))
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
            <h2>Budget for {copyOfFormData.month} {copyOfFormData.year}</h2>
            <form onSubmit={handleSubmit}>
                <label>Monthly Income: $ </label><input name="monthly_income" type="number" min="0" value={formData.monthly_income} onChange={handleChange} required></input>
                <label>Mortgage/Rent: $ </label><input name="mortgage_or_rent" type="number" min="0" value={formData.mortgage_or_rent} onChange={handleChange} required></input>
                <label>Car Payment: $ </label><input name="car_payment" type="number" min="0" value={formData.car_payment} onChange={handleChange} required></input>
                <label>Car Insurance: $ </label><input name="car_insurance" type="number" min="0" value={formData.car_insurance} onChange={handleChange} required></input>
                <label>Health Insurance: $ </label><input name="health_insurance" type="number" min="0" value={formData.health_insurance} onChange={handleChange} required></input>
                <label>Utilities: $ </label><input name="utilities" type="number" min="0" value={formData.utilities} onChange={handleChange} required></input>
                <label>Credit Card Debt: $ </label><input name="credit_card_debt" type="number" min="0" value={formData.credit_card_debt} onChange={handleChange} required></input>
                <label>Cable: $ </label><input name="cable" type="number" min="0" value={formData.cable} onChange={handleChange} required></input>
                <label>Internet: $ </label><input name="internet" type="number" min="0" value={formData.internet} onChange={handleChange} required></input>
                <label>Food/Groceries: $ </label><input name="food_or_groceries" type="number" min="0" value={formData.food_or_groceries} onChange={handleChange} required></input>
                <label>Clothing: $ </label><input name="clothing" type="number" min="0" value={formData.clothing} onChange={handleChange} required></input>
                <label>Recreational: $ </label><input name="recreational" type="number" min="0" value={formData.recreational} onChange={handleChange} required></input >
                <label>Savings/Investments: $ </label><input name="savings_or_investments" type="number" min="0" value={formData.savings_or_investments} onChange={handleChange} required></input>
                <label>Other: $ </label><input name="other" type="number" min="0" value={formData.other} onChange={handleChange} required></input>
                <p>Total Expenses: {copyOfFormData.total_expenses || copyOfFormData.total_expenses === 0 ? `$${copyOfFormData.total_expenses}` : "Calculating..."}</p>
                <p>Remaining: {copyOfFormData.left_over || copyOfFormData.left_over === 0 ? `$${copyOfFormData.left_over}` : "Calculating..."}</p>
                {remaining > 0 ? <button type="submit">Submit</button> : remaining === 0 ? null : <p>Your remaining amount is negative, please re-evaluate your expenses and income</p>}
            </form>
        </div>
    )
}

export default BudgetForm