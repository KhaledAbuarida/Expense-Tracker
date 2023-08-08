import { ExpensesCategories } from '../../App'
interface Props {
    onSelectCategory: (category: string) => void
}

function ExpenseFilter({onSelectCategory}: Props){
    return(
        <select className="form-select mb-3" onChange={(event)=> onSelectCategory(event.target.value)}>
            <option >All Categories</option>
            { ExpensesCategories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
    )
}
export default ExpenseFilter;