import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { add_tag, edit_tag, messageClear, update_tag } from '../../store/Reducers/tagReducer';


const AddTag = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tagSlug } = useParams();

    const { loader, successMessage, errorMessage, editTag } = useSelector((state) => state.tag);

    const [state, setState] = useState({
        tagName: '',
        tagDes: ''
    });

    useEffect(() => {

        if (tagSlug) {
            setState({
                tagName: editTag.tagName,
                tagDes: editTag.tagDes
            });
        } else {
            setState({
                tagName: "",
                tagDes: ""
            })
        }
    }, [editTag, tagSlug])


    // inputHendle
    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    // addTag
    const addTag = (e) => {
        e.preventDefault();
        if (!tagSlug) {
            dispatch(add_tag(state))
        } else {
            const obj = {
                id: editTag._id,
                state
            }
            dispatch(update_tag(obj))
        }
    }

    useEffect(() => {

        if (!errorMessage.tagName && !errorMessage.tagDes) {
            if (errorMessage) {
                toast.error(errorMessage)
                dispatch(messageClear())
            }
        }

        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/dashboard/all-tag', { replace: true })
        }
    }, [errorMessage, successMessage])


    useEffect(() => {
        if (tagSlug) {
            dispatch(edit_tag(tagSlug))
        }
    }, [tagSlug])


    return (
        <div className='add-category'>
            <Helmet>
                <title>{tagSlug ? 'Tag Edit' : 'Tag add'}</title>
            </Helmet>

            <div className="added">
                <div className="title-show-article">
                    <h2>{tagSlug ? "Edit Tag" : "Add Tag"}</h2>
                    <Link className='btn' to="/dashboard/all-tag">All Tag</Link>
                </div>
                <form onSubmit={addTag}>
                    <div className="form-group">
                        <label htmlFor="category_name">Tag name</label>
                        <input onChange={inputHendle} value={state.tagName} type="text" name='tagName' className="form-control" placeholder='Tag name' id='category_name' />
                        <p style={{ color: "red", fontSize: "14px", padding: "2px" }}>{errorMessage ? errorMessage.tagName : ""}</p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="category_des">Tag description</label>
                        <textarea onChange={inputHendle} value={state.tagDes} name='tagDes' type="text" className="form-control" placeholder='Tag description' id='category_des' />
                        <p style={{ color: "red", fontSize: "14px", padding: "2px" }}>{errorMessage ? errorMessage.tagDes : ""}</p>

                    </div>
                    <div className="form-group">
                        {
                            loader ? <button className="btn btn-block">
                                <div className="spinner">
                                    <div className="spinner1"></div>
                                    <div className="spinner2"></div>
                                    <div className="spinner3"></div>
                                </div>
                            </button> : <button className="btn btn-block">{tagSlug ? 'Edit Tag' : 'Add Tag'}</button>

                        }
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddTag;