import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { delete_article, get_all_article, messageClear } from '../../store/Reducers/articleReducer';
import Pagination from '../home/Pagination';
import { base_url } from '../../api/api';

// import htmlToText from "react-html-parser";


const DashboradArticle = () => {

    const dispatch = useDispatch();

    const { allArticle, articleCount, successMessage, errorMessage } = useSelector(state => state.article);

    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [parPage, setParPage] = useState(12)


    useEffect(() => {
        const obj = {
            parPage: parseInt(parPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_all_article(obj))
    }, [searchValue, currentPage, parPage])



    useEffect(() => {

        const obj = {
            parPage: '',
            page: '',
            searchValue: ''
        }

        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear());
            dispatch(get_all_article(obj))
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [errorMessage, successMessage])


    return (
        <div className='dashborad-article'>
            <Helmet>
                <title>All Article</title>
            </Helmet>

            <div className="article-action-pagination">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>Article ({articleCount})</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type="text" placeholder='Search article' className="form-control" />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashboard/article-add'>Add New</Link>
                    </div>
                </div>
                <div className="height-70vh">
                    <div className="articles">
                        {
                            allArticle.length > 0 ? allArticle?.map((art, index) =>
                                <div className="article">
                                    <img src={art.image} alt="img" />
                                    <Link to={`/artical/details/${art.slug}`}>{(art.title.slice(0, 30))}</Link>

                                    <p style={{ textAlign: "justify" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. </p>
                                    <div className="action">
                                        <span>
                                            <Link to={`/dashboard/article/edit/${art.slug}`}><MdEdit /></Link>
                                        </span>
                                        <span>
                                            <Link to={`/artical/details/${art.slug}`}><FaRegEye /></Link>
                                        </span>
                                        <span onClick={() => dispatch(delete_article(art._id))}><MdDelete /></span>
                                    </div>
                                </div>
                            ) : 'Article not found...'
                        }
                    </div>
                </div>

                <br />

                {
                    articleCount >= parPage ?
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={articleCount}
                            parPage={parPage}
                            showItem={Math.floor(articleCount / parPage)}
                        /> : ''
                }

            </div>

        </div>
    )
}

export default DashboradArticle;