import DeleteButton from "./DeleteButton"
import EditBudget from "./EditBudget"
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import {useState} from "react"
import { chartColors } from "./colors";


function BudgetCard({budget, handleDeleteItem, year, todaysMonth, setBudgets}) {
  const [wasClicked, setWasClicked] = useState(false)
  const [clickedEdit, setClickedEdit] = useState(false)

  if(!budget) {
    return <p>Loading...</p>
  }
  
  function renderEdit(){
    if (year === budget.month.year && todaysMonth === budget.month.month) {
      return <button onClick={handleWasClickedEdit}>{clickedEdit?"Hide Edit":"Edit"}</button>
    }
  }
  
  function handleClicked() {
    setWasClicked(current => !current)
  }
  
  function handleWasClickedEdit() {
    setClickedEdit(current => !current)
  }
  ChartJS.register(ArcElement, Tooltip, Legend);
  
    const options = {
        legend: {
          display: false,
          position: "right"
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      };
      
      const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["Car Payment", "Car Insurance", "Health Insurance", "Mortgage/Rent", "Internet", "Food/Groceries", "Clothing", "Utilities", "Credit Card Debt", "Cable", "recreational", "Savings/Investments", "Other"],
        datasets: [
          {
            data: [budget.car_payment, budget.car_insurance, budget.health_insurance, budget.mortgage_or_rent, budget.internet, budget.food_or_groceries, budget.clothing, budget.utilities, budget.credit_card_debt, budget.cable, budget.recreational, budget.savings_or_investments, budget.other],
            backgroundColor: chartColors,
            hoverBackgroundColor: chartColors
          }
        ]
      };
      
      return (
        <div className="cards">
            <p className="givespace">{budget.month.month}</p>
            <p className="givespace">{budget.month.year}</p>
            <p className="givespace"> Total Expenses: ${budget.total_expenses}</p>
            <p className="givespace"> Remaining: ${budget.left_over}</p>
            <button onClick={handleClicked}>{wasClicked ? "Hide Details" : "Show Details"}</button>
            <DeleteButton handleDeleteItem={handleDeleteItem} id={budget.id}/>
            {renderEdit()}
            {clickedEdit?<EditBudget budget={budget} setBudgets={setBudgets} setClickedEdit={setClickedEdit}/>:null}
            {wasClicked?<div>
                <p>Income for the Month: ${budget.monthly_income}</p>
                <p>Car Payment: ${budget.car_payment}</p>
                <p>Car Insurance: ${budget.car_insurance}</p>
                <p>Health Insurance: ${budget.health_insurance}</p>
                <p>Mortgage/Rent: ${budget.mortgage_or_rent}</p>
                <p>Internet: ${budget.internet}</p>
                <p>Food/Groceries: ${budget.food_or_groceries}</p>
                <p>Clothing: ${budget.clothing}</p>
                <p>Utilities: ${budget.utilities}</p>
                <p>Credit Card Debt: ${budget.credit_card_debt}</p>
                <p>Cable: ${budget.cable}</p>
                <p>Recreational: ${budget.recreational}</p>
                <p>Savings/Investments: ${budget.savings_or_investments}</p>
                <p>Other: ${budget.other}</p>
                <Doughnut data={data} options={options} />
            </div>:null}
        </div>
    )
  }
  
export default BudgetCard