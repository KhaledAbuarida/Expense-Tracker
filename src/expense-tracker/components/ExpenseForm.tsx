import categories from './categories'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';

const schema = z.object({
    description: z.string().min(2, {message: 'description must be at least 2 characters'}).max(50),
    price: z.number({invalid_type_error: 'amount value is required'}).min(0.01).max(100_00),
    quantity: z.number({invalid_type_error: 'quantity value is required'}).min(1).max(1000),
    category: z.enum(categories, {
        errorMap: () => ({message: 'category value is required'})
    }),
})

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: ExpenseFormData) => void;
}


function ExpenseForm({onSubmit}: Props){
    const {register, handleSubmit, reset, formState: {errors}} = useForm<ExpenseFormData>({ resolver: zodResolver(schema)});

    return(
        <form className='mb-3' onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset();    
            })}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} id="description" type="text" className="form-control" />
                {errors.description && <p className='text-danger'>{errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">price</label>
                <input {...register('price', { valueAsNumber: true})} id="price" type="number" className="form-control" />
                {errors.price && <p className='text-danger'>{errors.price.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">quantity</label>
                <input {...register('quantity', { valueAsNumber: true})} id="price" type="number" className="form-control" />
                {errors.quantity && <p className='text-danger'>{errors.quantity.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="categories" className="form-label">Categories</label>
                <select {...register('category')} id="categories" className="form-select">
                    <option value=""></option>
                    { categories. map(category => <option key={category} value={category}>{category}</option>)}
                </select>
                {errors.category && <p className='text-danger'>{errors.category.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ExpenseForm;
