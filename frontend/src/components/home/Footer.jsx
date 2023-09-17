import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';

const Footer = () => {

    const dispatch = useDispatch()

    useEffect(() => {

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
                                [1, 2, 3].map(() => (
                                    <div className="some-recent-artical">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="img">
                                                    <img src={`http://localhost:3000/articalImage/1652292899080image5.jpeg`} alt="articalImage" />
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="title-link">
                                                    <Link to='/artical/details/sdfhgs'>Title</Link>
                                                    <br />
                                                    <span>2 jun 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
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
                                                [1, 2, 3].map(() => (
                                                    <div className="cate-item">

                                                        <li><FaChevronRight /><Link to='/artical/category/algorithom'>123456</Link></li>
                                                        <span>(10)</span>
                                                    </div>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="tag">
                                        <div className="title">
                                            <h3>Tag</h3>
                                        </div>
                                        <ul className="tag-list">
                                            {/* {
                                                allTag.length > 0 && allTag.map((tag, index) => <li className='tag-item' key={index}><Link to='/artical/tag/programming'>{tag}</Link></li>
                                                )
                                            } */

                                                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((tag, index) => (
                                                    <li className='tag-item' key={index}><Link to='/artical/tag/programming'>Tag</Link></li>
                                                ))
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
                                [1, 2, 3].map(() => (
                                    <div className="some-recent-artical">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="img">
                                                    <img src={`http://localhost:3000/articalImage/1654439845219room-12.jpeg`} alt="articalImage" />
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="title-link">
                                                    <Link to='/artical/details/sdfhgs'>Title</Link>
                                                    <br />
                                                    <span>2 jun 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default Footer;
