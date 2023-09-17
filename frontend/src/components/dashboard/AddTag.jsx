import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";


const AddTag = () => {

    const loader = false;

    const addTag = () => {

    }

    return (
        <div className='add-category'>
            <Helmet>
                <title>Tag add</title>
            </Helmet>

            <div className="added">
                <div className="title-show-article">
                    <h2>Add Tag</h2>
                    <Link className='btn' to="/dashboard/all-tag">All Tag</Link>
                </div>
                <form onSubmit={addTag}>
                    <div className="form-group">
                        <label htmlFor="category_name">Tag name</label>
                        <input type="text" name='tagName' className="form-control" placeholder='category name' id='category_name' />
                        {/* <p className='error'>{tagError ? tagError.tagName : ""}</p> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="category_des">Tag description</label>
                        <textarea name='tagDes' type="text" className="form-control" placeholder='category description' id='category_des' />
                        {/* <p className='error'>{tagError ? tagError.tagDes : ""}</p> */}
                    </div>
                    <div className="form-group">
                        {
                            loader ? <button className="btn btn-block">
                                <div className="spinner">
                                    <div className="spinner1"></div>
                                    <div className="spinner2"></div>
                                    <div className="spinner3"></div>
                                </div>
                            </button> : <button className="btn btn-block">Add Tag</button>

                        }
                    </div>
                </form>
            </div>


        </div>
    )
}

export default AddTag;