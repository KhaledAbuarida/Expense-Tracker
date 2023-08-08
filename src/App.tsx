import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { useState } from 'react'

function App(){

  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    {id:3, description: 'ccc', price: 10, quantity:13, category: 'Utilities'},
    {id:1, description: 'aaa', price: 10, quantity:13, category: 'Groceries'},
    {id:6, description: 'fff', price: 200, quantity:13, category: 'Entertainment'},
    {id:4, description: 'ddd', price: 10, quantity:13, category: 'Utilities'},
    {id:5, description: 'eee', price: 10, quantity:13, category: 'Groceries'},
    {id:7, description: 'ggg', price: 10, quantity:13, category: 'Entertainment'},
    {id:2, description: 'bbb', price: 10, quantity:13, category: 'Groceries'},
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