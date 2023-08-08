
interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    Expenses: Expense[];
    onDelete: (id: number)=>void;
}




function ExpenseList({Expenses, onDelete}: Props){
    return(
        <table className="table table-border">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {Expenses.map(item =>
                    <tr key={item.id}>
                         <td>{item.description}</td>
                         <td>{item.amount}</td>
                         <td>{item.category}</td>
                         <td>
                            <button 
                                className="btn-danger" 
                                onClick={() => onDelete(item.id)}>
                                    Delete
                            </button>
                        </td>   
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default ExpenseList;