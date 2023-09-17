import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { BsCardImage } from "react-icons/bs";
import JoditEditor from "jodit-react";
import toast from "react-hot-toast";
import { useSelector } from 'react-redux';


const ArticleAdd = () => {

    const loader = false;

    const { allCategory } = useSelector(state => state.category);

    const [text, setText] = useState('');
    const editor = useRef();

    const [state, setState] = useState({
        title: '',
        category: '',
        tag: '',
        image: '',
    });

    const [slug, setSlug] = useState('');
    const [imageShow, setImage] = useState('')
    const [updateBtn, setUpdateBtn] = useState(false);


    const titleHendler = (e) => {
        setState({
            ...state,
            title: e.target.value
        })
    }


    const slugHendle = (e) => {
        setSlug(e.target.value)
        setUpdateBtn(true)
    }


    const handleContentChange = (newContent) => {
        setText(newContent);
    };

    // imageHendle
    const imageHendle = (e) => {
        let files = e.target.files;
        if (files.length > 0) {
            setState({
                ...state,
                image: files[0]
            });
            setImage(URL.createObjectURL(files[0]))
        }

    }

    const add = (e) => {
        e.preventDefault();

        console.log(text)

    }

    const config = {
        readonly: false
    }

    return (
        <div className='add-article'>
            <Helmet>
                <title>Article add</title>
            </Helmet>


            <div className="add">
                <div className="title-show-article">
                    <h2>Add Article</h2>
                    <Link className='btn' to="/dashboard/all-article">All Article</Link>
                </div>
                <form onSubmit={add}>
                    <div className="form-group">
                        <label htmlFor="title">Article title</label>
                        <input onChange={titleHendler} value={state.text} type="text" name='title' placeholder='article title' className="form-control" id='title' />

                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Article slug</label>
                        <input onChange={slugHendle} value={slug} type="text" placeholder='article slug' className="form-control" name='slug' id='slug' />

                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select className='form-control' name="category" id="category">
                            <option value="">--select article category--</option>
                            {
                                allCategory.length > 0 ? allCategory?.map((c, i) => {
                                    return <option key={i} value={c.categorySlug}>{c.categoryName}</option>
                                }) : ''
                            }
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <select className='form-control' name="tag" id="tag">
                            <option value="sdas">--select article tag--</option>

                        </select>

                    </div>
                    <div className="form-group img_upload">
                        <div className="upload">
                            <label htmlFor="upload_image"><BsCardImage /></label>
                            <input type="file" id='upload_image' />
                        </div>
                        <label htmlFor="article text">Article text</label>
                        <JoditEditor
                            value={text}
                            tabIndex={1}
                            ref={editor}
                            config={config}
                            onBlur={newText => setText(newText)}
                            onChange={newText => { }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <div className="image-select">

                            <label htmlFor="image">Select Image</label>
                            <input onChange={imageHendle} type="file" className="form-control" name='image' id='image' />
                        </div>
                        <div className="image">
                            {
                                imageShow ? <img src={imageShow} alt="img" /> : ''
                            }
                        </div>

                    </div>
                    <div className="form-group">
                        {
                            loader ? <button className="btn btn-block">
                                <div className="spinner">
                                    <div className="spinner1"></div>
                                    <div className="spinner2"></div>
                                    <div className="spinner3"></div>
                                </div>
                            </button> : <button className="btn btn-block">Add Article</button>

                        }
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ArticleAdd;