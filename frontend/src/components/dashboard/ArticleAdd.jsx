import React, { useState, useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsCardImage } from "react-icons/bs";
import JoditEditor from "jodit-react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { add_articale, article_edit, article_update, messageClear } from '../../store/Reducers/articleReducer';


const ArticleAdd = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { articleSlug } = useParams();


    const { allCategory } = useSelector(state => state.category);
    const { allTag } = useSelector(state => state.tag);
    const { loader, errorMessage, successMessage, editArticle } = useSelector(state => state.article);

    const [text, setText] = useState('');
    const editor = useRef();


    const [state, setState] = useState({
        title: '',
        category: '',
        tag: '',
        image: '',
    });



    const [slug, setSlug] = useState('');
    const [imageShow, setImage] = useState('');
    const [oldImage, setOldImage] = useState('');
    const [updateBtn, setUpdateBtn] = useState(false);


    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const titleHendler = (e) => {
        setState({
            ...state,
            title: e.target.value
        });

        const createSlug = e.target.value.trim().split(' ').join('-')
        setSlug(createSlug)
    }


    const slugHendle = (e) => {
        setSlug(e.target.value)
        setUpdateBtn(true)
    }


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


    // add form data
    const add = (e) => {
        e.preventDefault();
        const { title, image, category, tag } = state;

        const formData = new FormData();

        formData.append('title', title);
        formData.append('image', image);
        formData.append('oldImage', oldImage);
        formData.append('category', category);
        formData.append('tag', tag);
        formData.append('slug', slug);
        formData.append('text', text);
        formData.append('articleId', editArticle ? editArticle._id : "");

        if (!articleSlug) {
            dispatch(add_articale(formData))
        } else {
            dispatch(article_update(formData))
        }
    }

    const config = {
        readonly: false
    }


    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }

        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/dashboard/all-article', { replace: true })
        }
    }, [errorMessage, successMessage])


    // article_edit
    useEffect(() => {
        if (articleSlug) {
            dispatch(article_edit(articleSlug))
        }
    }, [articleSlug])

    // article_edit
    useEffect(() => {
        if (articleSlug) {
            setState({
                title: editArticle.title,
                category: editArticle.category,
                tag: editArticle.tag,
            });

            setOldImage(editArticle.image)
            setImage(editArticle.image)
            setSlug(editArticle.slug)
            setText(editArticle.articleText)
        } else {
            setState({
                title: "",
                category: "",
                tag: ""
            });
            setSlug("")
            setText("")
        }
    }, [articleSlug, editArticle])


    return (
        <div className='add-article'>
            <Helmet>
                <title>Article add</title>
            </Helmet>

            <div className="add">
                <div className="title-show-article">
                    <h2>{articleSlug ? "Edit Article" : "Add Article"}</h2>
                    <Link className='btn' to="/dashboard/all-article">All Article</Link>
                </div>
                <form onSubmit={add}>
                    <div className="form-group">
                        <label htmlFor="title">Article title</label>
                        <input onChange={titleHendler} value={state.title} type="text" name='title' placeholder='article title' className="form-control" id='title' />

                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Article slug</label>
                        <input onChange={slugHendle} value={slug} type="text" placeholder='article slug' className="form-control" name='slug' id='slug' />

                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select onChange={inputHendle} value={state.category} className='form-control' name="category" id="category">
                            <option value="">--select article category--</option>
                            {
                                allCategory?.length > 0 ? allCategory?.map((c, i) => {
                                    return <option key={i} value={c.categorySlug}>{c.categoryName}</option>
                                }) : ''
                            }
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <select onChange={inputHendle} value={state.tag} className='form-control' name="tag" id="tag">
                            <option value="sdas">--select article tag--</option>
                            {
                                allTag?.length > 0 ? allTag?.map((c, i) => {
                                    return <option key={i} value={c.tagSlug}>{c.tagName}</option>
                                }) : ''
                            }
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
                            </button> : <button className="btn btn-block">{articleSlug ? "Edit Article" : "Add Article"}</button>

                        }
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ArticleAdd;