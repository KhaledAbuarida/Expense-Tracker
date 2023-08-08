import ExpenseList from "./components/ExpenseList";
import ItemForm from "./components/ItemFrom";

function App(){
  const expenses = [
    {id:1, description: 'aaa', amount: 10, category: 'groceries'},
    {id:2, description: 'bbb', amount: 20, category: 'utilities'},
    {id:3, description: 'ccc', amount: 30, category: 'groceries'},
    {id:4, description: 'ddd', amount: 40, category: 'groceries'},
  ]

  const handleDelete = ()=> {
    console.log('deleted');
  }

  return(
    <div>
       <ExpenseList Expenses={expenses} onDelete={handleDelete} />
       <ItemForm />
    </div>
    
  )
}

export default App;