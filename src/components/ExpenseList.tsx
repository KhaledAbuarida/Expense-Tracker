import { useState } from "react";

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
    const [price, setPrice] = useState(0);


    
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
                                className="btn btn-outline-danger" 
                                onClick={() => onDelete(item.id)}>
                                    Delete
                            </button>
                        </td>   
                    </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <th>${Expenses.reduce((acc, item) => item.amount + acc , 0)}</th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    )
}

export default ExpenseList;