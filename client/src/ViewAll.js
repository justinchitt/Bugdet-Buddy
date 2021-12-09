import BudgetCard from "./BudgetCard"

function ViewAll({budgets, handleDeleteItem, year, todaysMonth, setBudgets}) {

    if (!budgets[0]) {
        return <p>You currently do not have any budgets</p>
    }
    
    let budgetCards = budgets.map(handleMap)
    
    function handleMap(budget) {
        return <BudgetCard key={budget.id} budget={budget} handleDeleteItem={handleDeleteItem} year={year} todaysMonth={todaysMonth} setBudgets={setBudgets}/>
    }
    return(
        <div>
            <h2>All Budgets</h2>
            {budgetCards}
        </div>
    )
}

export default ViewAll