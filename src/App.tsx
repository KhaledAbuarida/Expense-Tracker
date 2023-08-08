import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { useState } from 'react'

function App(){

  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    {id:1, description: 'aaa', amount: 10, category: 'Groceries'},
    {id:2, description: 'bbb', amount: 20, category: 'Utilities'},
    {id:3, description: 'ccc', amount: 30, category: 'Groceries'},
    {id:4, description: 'ddd', amount: 40, category: 'Groceries'},
  ])

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses; 

  return(
    <div>
      <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />
      <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
      <ExpenseList Expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id != id))} />
    </div>
    
  )
}

export default App;