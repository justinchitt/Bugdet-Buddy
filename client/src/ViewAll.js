import BudgetCard from "./BudgetCard"

function ViewAll({budgets, handleDeleteItem, year, todaysMonth, setBudgets}) {
    
    if (!budgets) {
        return <p>Loading...</p>
    }

    let budgetCards = budgets.map(handleMap)
    
    function handleMap(budget) {
        return <BudgetCard key={budget.id} budget={budget} handleDeleteItem={handleDeleteItem} year={year} todaysMonth={todaysMonth} setBudgets={setBudgets}/>
    }
    return(
        <div>
            {budgetCards}
        </div>
    )
}

export default ViewAll