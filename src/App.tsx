import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { useState } from 'react'

export const ExpensesCategories = ['Groceries', 'Utilities', 'Entertainment'] as const;

function App(){

  const [selectedCategory, setSelectedCategory] = useState('');

  const [expense, setExpense] = useState([
    {id:1, description: 'aaa', amount: 10, category: 'Groceries'},
    {id:2, description: 'bbb', amount: 20, category: 'Utilities'},
    {id:3, description: 'ccc', amount: 30, category: 'Groceries'},
    {id:4, description: 'ddd', amount: 40, category: 'Groceries'},
  ])

  const visibleExpenses = selectedCategory ? expense.filter(e => e.category === selectedCategory) : expense; 

  return(
    <div>
      <ExpenseForm />
      <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
      <ExpenseList Expenses={visibleExpenses} onDelete={(id) => setExpense(expense.filter(e => e.id != id))} />
    </div>
    
  )
}

export default App;