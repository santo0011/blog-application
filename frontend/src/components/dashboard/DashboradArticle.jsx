import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

// import htmlToText from "react-html-parser";


const DashboradArticle = () => {
    return (
        <div className='dashborad-article'>
            <Helmet>
                <title>All Article</title>
            </Helmet>

            <div className="article-action-pagination">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>Article (22)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input type="text" placeholder='Search article' className="form-control" />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashborad/article-add'>Add New</Link>
                    </div>
                </div>
                <div className="height-70vh">
                    <div className="articles">
                        {
                            [1, 2, 3, 4, 5].map((art, index) =>
                                <div className="article">
                                    <img src={`http://localhost:3000/articalImage/1672425568641istock.jpg`} alt="img" />
                                    <Link to={`/artical/details/123`}>Title</Link>
                                    <p style={{textAlign:"justify"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. </p>
                                    <div className="action">
                                        <span>
                                            <Link to={`/dashborad/article/edit/123`}><MdEdit /></Link>
                                        </span>
                                        <span>
                                            <Link><FaRegEye /></Link>
                                        </span>
                                        <span><MdDelete /></span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DashboradArticle;