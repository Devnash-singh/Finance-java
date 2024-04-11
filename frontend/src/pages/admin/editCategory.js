import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/utils/header";
import Message from "../../components/utils/message";
import { useForm } from "react-hook-form";
import AdminService from "../../services/adminService";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditCategory() {
    const {categoryId} = useParams();
    const { register, handleSubmit, reset, formState } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        const category = JSON.parse(localStorage.getItem('categoryToEdit'));

        if (category.categoryId == categoryId) {

            reset({
                cname: category.categoryName,
                type: String(category.transactionType.transactionTypeId)
            })
        }else {
            setMessage("Failed to fetch details: Try again later!")
        }
        localStorage.removeItem('categoryToEdit')
    }, [reset, categoryId])

    const onSubmit = async (data) => {
        setIsLoading(true)
        const response = await AdminService.updatecategory(categoryId, data.cname, data.type).then(
            (response) => {
                if (response.data.status === 'SUCCESS') {
                    navigate('/admin/categories')
                    return
                }
                setMessage({ status: "FAIL", text: "Failed to update category: Try again later!" })
            },
            (error) => {
                error.response ?
                    setMessage({ status: "FAIL", text: error.response.data.response })
                    :
                    setMessage({ status: "FAIL", text: "Failed to update category: Try again later!" })
            }
        )
        setIsLoading(false)
    }

    return (
        <div className="user-panel">
            <Sidebar activeNavId={6} />
            <div className="user-content">
                <Header title="Edit category" />
                <Message message={message} />

                <form className="auth-form t-form" onSubmit={handleSubmit(onSubmit)} style={{marginTop: '25px'}}>
                    <div className='input-box'>
                        <label>Category name</label><br />
                        <input
                            type='text'
                            {...register('cname', {
                                required: "Category name is required!",
                                maxLength: {
                                    value: 30,
                                    message: "Category name can have atmost 30 characters!"
                                }
                            })}
                        />
                        {formState.errors.cname && <small>{formState.errors.cname.message}</small>}
                    </div>

                    <div className='input-box'>
                        <label>Transaction type</label><br />
                        <div className='radio'>
                            <span>
                                <label>
                                    <input
                                        type='radio'
                                        id={1}
                                        value={1}
                                        {...register('type', {
                                            required: "Transaction type is required!"
                                        })}
                                    />
                                    Expense
                                </label>
                            </span>
                            <span>
                                <label>
                                    <input
                                        type='radio'
                                        id={2}
                                        value={2}
                                        {...register('type', {
                                            required: "Transaction type is required!"
                                        })}
                                    />
                                    Income
                                </label>
                            </span>
                        </div>
                        {formState.errors.type && <small>{formState.errors.type.message}</small>}
                    </div>

                    <div className='input-box'>
                        <input 
                            type='submit' 
                            value={isLoading ? "Saving..." : 'Save category'}
                            className={isLoading ? "button button-fill loading" : "button button-fill"} 
                        />
                        <Link 
                            to='/admin/categories' 
                            className='button outline'>
                                <span>Cancel</span>
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default EditCategory;