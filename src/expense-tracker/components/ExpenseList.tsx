import { useState } from "react";

interface Expense {
    id: number;
    description: string;
    price: number;
    quantity: number,
    category: string;
}

interface Props {
    Expenses: Expense[];
    onDelete: (id: number)=>void;
}




function ExpenseList({Expenses, onDelete}: Props){


    if(Expenses.length == 0) return null
    return(
        <table className="table table-border">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {Expenses.map(item =>
                    <tr key={item.id}>
                         <td>{item.description}</td>
                         <td>{item.price}</td>
                         <td>{item.quantity}</td>
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
                    <th>${Expenses.reduce((acc, item) => (item.price * item.quantity) + acc , 0)}</th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    )
}

export default ExpenseList;