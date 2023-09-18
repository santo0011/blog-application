import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { add_category, edit_category, messageClear, update_category } from '../../store/Reducers/categoryReducer';


const AddCategory = () => {

    const { cateSlug } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loader, successMessage, errorMessage, editCategory } = useSelector((state) => state.category);


    const [state, setState] = useState({
        categoryName: '',
        categoryDes: ''
    });

    useEffect(() => {

        if (cateSlug) {
            setState({
                categoryName: editCategory.categoryName,
                categoryDes: editCategory.categoryDes
            });
        } else {
            setState({
                categoryName: "",
                categoryDes: ""
            })
        }
    }, [editCategory, cateSlug])

    // inputHendle
    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    // addCategory
    const addCategory = (e) => {
        e.preventDefault();
        if (!cateSlug) {
            dispatch(add_category(state))
        } else {
            const obj = {
                id: editCategory._id,
                state
            }
            dispatch(update_category(obj))
        }
    }

    useEffect(() => {
        if (!errorMessage.categoryName && !errorMessage.categoryDes) {
            if (errorMessage) {
                toast.error(errorMessage)
                dispatch(messageClear())
            }
        }

        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/dashboard/all-category', { replace: true })
        }
    }, [errorMessage, successMessage])

    useEffect(() => {
        if (cateSlug) {
            dispatch(edit_category(cateSlug))
        }
    }, [cateSlug])


    return (
        <div className='all-category'>
            <Helmet>
                <title>{cateSlug ? "Category add" : "Category edit"}</title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>{cateSlug ? "Edit Category" : 'Add Category'}</h2>
                    <Link className='btn' to="/dashboard/all-category">All Category</Link>
                </div>
                <form onSubmit={addCategory}>
                    <div className="form-group">
                        <label htmlFor="category_name">Category name</label>
                        <input onChange={inputHendle} value={state.categoryName} type="text" name='categoryName' className="form-control" placeholder='Category name' id='category_name' />
                        <p style={{ color: "red", fontSize: "14px", padding: "2px" }}>{errorMessage ? errorMessage.categoryName : ""}</p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="category_des">Category description</label>
                        <textarea onChange={inputHendle} value={state.categoryDes} name='categoryDes' type="text" className="form-control" placeholder='Category description' id='category_des' />
                        <p style={{ color: "red", fontSize: "14px", padding: "2px" }}>{errorMessage ? errorMessage.categoryDes : ""}</p>
                    </div>
                    <div className="form-group">
                        {
                            loader ? <button className="btn btn-block">
                                <div className="spinner">
                                    <div className="spinner1"></div>
                                    <div className="spinner2"></div>
                                    <div className="spinner3"></div>
                                </div>
                            </button> : <button style={{ background: "#444", color: "#fff" }} className="btn btn-block">{cateSlug ? 'Edit Category' : 'Add Category'}</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCategory;