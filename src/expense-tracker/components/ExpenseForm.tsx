import ExpensesCategories from './categories'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';

const schema = z.object({
    description: z.string().min(5, {message: 'description must be at least 5 characters'}).max(50),
    amount: z.number({invalid_type_error: 'amount value is required'}).min(0.01).max(100_00),
    category: z.enum(ExpensesCategories, {
        errorMap: () => ({message: 'category value is required'})
    }),
})

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: ExpenseFormData) => void;
}


function ExpenseForm({onSubmit}: Props){
    const {register, handleSubmit, formState: {errors}} = useForm<ExpenseFormData>({ resolver: zodResolver(schema)});

    return(
        <form className='mb-3' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} id="description" type="text" className="form-control" />
                {errors.description && <p className='text-danger'>{errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount', { valueAsNumber: true})} id="amount" type="number" className="form-control" />
                {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="categories" className="form-label">Categories</label>
                <select {...register('category')} id="categories" className="form-select">
                    <option value=""></option>
                    { ExpensesCategories. map(category => <option key={category} value={category}>{category}</option>)}
                </select>
                {errors.category && <p className='text-danger'>{errors.category.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ExpenseForm;
