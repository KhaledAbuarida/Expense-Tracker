import { ExpensesCategories } from '../../App'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';

const schema = z.object({
    description: z.string().min(5).max(50),
    amount: z.number().min(0.01).max(100_00),
    categories: z.enum(ExpensesCategories),
})

type ExpenseFormData = z.infer<typeof schema>


function ExpenseForm(){
    const {register, handleSubmit, formState: {errors}} = useForm<ExpenseFormData>({ resolver: zodResolver(schema)});

    return(
        <form className='mb-3'>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} id="description" type="text" className="form-control" />
                {errors.description && <p className='text-danger'>{errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount')} id="amount" type="number" className="form-control" />
                {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="categories" className="form-label">Categories</label>
                <select {...register('categories')} id="categories" className="form-select">
                    { ExpensesCategories. map(category => <option key={category} value={category}>{category}</option>)}
                </select>
                {errors.categories && <p className='text-danger'>{errors.categories.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ExpenseForm;
