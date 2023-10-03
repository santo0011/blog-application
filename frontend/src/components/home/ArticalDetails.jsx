import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronRight } from "react-icons/bs";
import { AiFillTag, AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Comments from './Comments';
import htmlParser from 'react-html-parser';



const ArticalDetails = () => {
    return (
        <div className="article-details">
            <div className="path">
                <Link to='/'>Home</Link>
                <span className='arrow'><BsChevronRight /></span>
                <Link to={`/artical/category/santo`}>Algorithom</Link>
                <span className='arrow'><BsChevronRight /></span>
                <span>Why Is The Invention Of The Atomic Bomb A Quintessence Of Scientific Triumph?</span>
            </div>
            <div className="title">
                <h3><Link to="#">Why Is The Invention Of The Atomic Bomb A Quintessence Of Scientific Triumph?</Link></h3>
            </div>
            <div className="auth-time">
                <div className="auth">
                    <h4><AiFillTag /></h4>
                    <span><Link to={`/artical/tag/santo`}>Programming</Link></span>
                </div>
                <div className="time">
                    <span>2 jun 2020</span>
                </div>
            </div>
            <div className="home-artical-image">
                <img src={`http://localhost:3000/articalImage/1654439845219room-12.jpeg`} alt="img" />

            </div>
            <div className="home-artical-text">
                {/* <p>{htmlParser('A quick brown fox jumps upon right over the lazy dog.')}</p> */}
                <p>Science For Everyone: This week, in ABP Live's science column, we explain how the development of the atomic bomb shaped scientific discoveries over the years, and why it is a huge scientific triumph.Science For Everyone: This week, in ABP Live's science column, we explain how the development of the atomic bomb shaped scientific discoveries over the years, and why it is a huge scientific triumph.Science For Everyone: This week, in ABP Live's science column, we explain how the development of the atomic bomb shaped scientific discoveries over the years, and why it is a huge scientific triumph.</p>
            </div>
            <div className="like-dislike-view">
                <div className="like-dislike">

                    <div className="dislike">
                        <button className='icon'><AiFillDislike /></button>
                    </div>
                    <div className="like">
                        <button className='icon'><AiFillLike /></button>
                    </div>

                    {/* <div className="dislike">
                    {
                        userInfo && userInfo.role === 'user' ? <button onClick={article_dislike} className={dislike_status === 'dislike' ? 'icon red' : 'icon'} ><AiFillDislike /></button> : <button disabled className='icon'><AiFillDislike /></button>
                    }
                    <div className="like-number">({dislike})</div>
                </div>
                <div className="like">
                    {
                        userInfo && userInfo.role === 'user' ? <button onClick={article_like} className={like_status === 'like' ? 'icon blue' : 'icon'} ><AiFillLike /></button> : <button disabled className='icon'><AiFillLike /></button>
                    }
                    <div className="dislike-number">({like})</div>
                </div> */}

                </div>
                <div className="view">
                    <span>211</span>
                    <span>view</span>
                </div>
            </div>
            <div className="read-more">
                <span>Read more : </span>
                {/* <Link to={readMore?.slug}>{readMore?.title}</Link> */}
                <Link to={'/slug'}>Why Is The Invention Of The Atomic Bomb A Quintessence Of Scientific Triumph?</Link>
            </div>
            <div className="more-tags">
                <span>Tags</span>{
                    [1, 2, 3, 4].map(() => (
                        <Link to={`/artical/tag/santo`}>Computer</Link>
                    ))
                }

                {/* {
                moreTag.length > 0 && moreTag.map((teg, index) => <Link to={`/artical/tag/${teg}`} key={index}>{teg.split('-').join(' ')}</Link>)
            } */}
            </div>
            <div className="social-icons">
                <a className='l1' href=""><FaFacebookSquare /></a>
                <a className='l2' href=""><FaTwitterSquare /></a>
                <a className='l3' href=""><FaGithubSquare /></a>
                <a className='l4' href=""><ImLinkedin /></a>
            </div>
            <div className="related-article">
                <div className="more">
                    <h3>Related Articles</h3>
                </div>
                <div className="articles">
                    {/* {
                    related_article.length > 0 ? related_article.map((art, index) => <Link key={index} to={`/artical/details/${art.slug}`} className='article'>
                        <img src={`http://localhost:3000/articalImage/${art?.image}`} alt="" />
                        <span>very popular during the Renaissance. The first line of</span>
                    </Link>) : <span>Related article not found</span>
                } */}

                </div>
            </div>
            <div className="comment_title">
                <h3>Article comments</h3>
            </div>
            <Comments />
        </div>
    )
}


export default ArticalDetails;