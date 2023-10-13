import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { home_tag_category_get, old_react_article } from '../../store/Reducers/homeReducer';
import moment from 'moment';


const Footer = () => {

    const dispatch = useDispatch();

    const { homeCategory, homeTag, oldArticle, recentArticle } = useSelector(state => state.home);

    useEffect(() => {
        dispatch(home_tag_category_get())
        dispatch(old_react_article())
    }, [])



    return (
        <section id="footer">
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="title">
                                <h3>Old Artical</h3>
                            </div>
                            {
                                oldArticle.length > 0 && oldArticle?.map((art, index) =>
                                    <div key={index} className="some-recent-artical">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="img">
                                                    <img src={art.image} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="title-link">
                                                    <Link to={`/artical/details/${art.slug}`}>{art.title}</Link>
                                                    <br />
                                                    <span>{moment(art.createdAt).fromNow()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col-4">
                            <div className="title-cate-tag">
                                <div className="title">
                                    <h3>Category</h3>
                                </div>
                                <div className="cate-tag">
                                    <div className="cate">
                                        <ul className="cate-list">
                                            {
                                                homeCategory.length > 0 && homeCategory?.map((cate, index) =>
                                                    <div key={index} className="cate-item">

                                                        <li><FaChevronRight /><Link to={`/artical/category/${cate._id.split(' ').join('-')}`}>{cate._id}</Link></li>
                                                        <span>({cate.count})</span>
                                                    </div>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="tag">
                                        <div className="title">
                                            <h3>Tag</h3>
                                        </div>
                                        <ul className="tag-list">
                                            {
                                                homeTag.length > 0 && homeTag?.map((tag, index) => <li className='tag-item' key={index}><Link to={`/artical/tag/${tag.split(' ').join('-')}`}>{tag}</Link></li>
                                                )
                                            }

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="title">
                                <h3>Recent Recipse</h3>
                            </div>
                            {
                                recentArticle.length > 0 && recentArticle?.map((art, index) =>
                                    <div key={index} className="some-recent-artical">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="img">
                                                    <img src={art.image} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="title-link">
                                                    <Link to={`/artical/details/${art.slug}`}>{art.title}</Link>
                                                    <br />
                                                    <span>{moment(art.createdAt).fromNow()}</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Footer;