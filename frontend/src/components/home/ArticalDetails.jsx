import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronRight } from "react-icons/bs";
import { AiFillTag, AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Comments from './Comments';
import htmlParser from 'react-html-parser';
import moment from 'moment';
import { get_article_details } from '../../store/Reducers/homeReducer';
import { user_article_like } from '../../store/Reducers/dislikelikeReducer';


const ArticalDetails = () => {

    const { slug } = useParams();
    const dispatch = useDispatch();

    const { related_article, readMore, read_article, moreTag } = useSelector(state => state.home);
    const { userInfo } = useSelector((state) => state.auth);

    console.log(userInfo)

    const like_status = "";
    const dislike_status = "";

    // article_like
    const article_like = (e) => {
        e.preventDefault();
        const obj = {
            articleId: read_article._id,
            like_status,
            dislike_status,
            adminId: read_article.adminId
        }

        dispatch(user_article_like(obj))
    }

    useEffect(() => {
        dispatch(get_article_details(slug))
    }, [slug])


    return (
        <div className="article-details">
            <div className="path">
                <Link to='/'>Home</Link>
                <span className='arrow'><BsChevronRight /></span>
                <Link to={`/artical/category/${read_article?.category}`}>{read_article?.category}</Link>
                <span className='arrow'><BsChevronRight /></span>
                <span>{read_article?.title}</span>
            </div>
            <div className="title">
                <h3><Link to="#">{read_article?.title}</Link></h3>
            </div>
            <div className="auth-time">
                <div className="auth">
                    <h4><AiFillTag /></h4>
                    <Link to={`/artical/category/${read_article?.category_slug}`}>{read_article?.category}</Link>
                </div>
                <div className="time">
                    <span>{moment(read_article.createdAt).fromNow()}</span>
                </div>
            </div>
            <div className="home-artical-image">
                <img src={`${read_article?.image}`} alt="img" />
            </div>
            <div className="home-artical-text">
                <p>{htmlParser(read_article?.articleText)}</p>
            </div>
            <div className="like-dislike-view">
                <div className="like-dislike">

                    <div className="dislike">
                        <button className='icon'><AiFillDislike /></button>
                    </div>
                    <div className="like">
                        {
                            userInfo && userInfo.role === 'user' ? <button onClick={article_like} className={like_status === 'like' ? 'icon blue' : 'icon'} ><AiFillLike /></button> : <button disabled className='icon'><AiFillLike /></button>
                        }

                    </div>

                </div>
                <div className="view">
                    <span>211</span>
                    <span>view</span>
                </div>
            </div>
            <div className="read-more">
                <span>Read more : </span>
                <Link to={`/artical/details/${readMore?.slug}`}>{readMore?.title}</Link>
            </div>
            <div className="more-tags">
                <span>Tags</span>
                {
                    moreTag.length > 0 && moreTag.map((teg, index) => <Link to={`/artical/tag/${teg}`} key={index}>{teg.split('-').join(' ')}</Link>)
                }

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
                    {
                        related_article.length > 0 ? related_article.map((art, index) => <Link key={index} to={`/artical/details/${art.slug}`} className='article'>
                            <img src={`${art?.image}`} alt="img" />
                            <span>{art?.title}</span>
                        </Link>) : <span>Related article not found</span>
                    }

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