import ExpenseList from "./components/ExpenseList";
import ItemForm from "./components/ItemFrom";
import { useState } from 'react'

function App(){
  const [expense, setExpense] = useState([
    {id:1, description: 'aaa', amount: 10, category: 'groceries'},
    {id:2, description: 'bbb', amount: 20, category: 'utilities'},
    {id:3, description: 'ccc', amount: 30, category: 'groceries'},
    {id:4, description: 'ddd', amount: 40, category: 'groceries'},
  ])

 

  return(
    <div>
       <ExpenseList Expenses={expense} onDelete={(id) => setExpense(expense.filter(e => e.id != id))} />
       <ItemForm />
    </div>
    
  )
}

export default App;