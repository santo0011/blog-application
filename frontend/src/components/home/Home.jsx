import React, { useState, useRef, useEffect } from 'react';
import { FaArrowUp, FaChevronRight } from 'react-icons/fa';
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import PopularArtical from './PopularArtical';
import { Link, Outlet } from 'react-router-dom';
import CreateAt from './CreateAt';
import Footer from './Footer';
import HomeArtical from './HomeArtical';
import { home_tag_category_get } from '../../store/Reducers/homeReducer';


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const { homeCategory, homeTag } = useSelector(state => state.home);

    const [value, setvalue] = useState('');
    const nav = useRef();

    const search = (e) => {
        e.preventDefault();
        navigate(`/artical/search/${value}`)
    }

    const scrollTop = () => {
        nav.current?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        dispatch(home_tag_category_get())
    }, [])

    return (
        <div className='home'>
            <Navbar />
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <Outlet />
                            {/* <HomeArtical /> */}
                        </div>
                        <div className="col-4">
                            <div className="search-category-tag">
                                <div className="search">
                                    <h2>Search</h2>
                                    <div className="form-group">
                                        <input onChange={(e) => setvalue(e.target.value)} className='form-control' type="text" placeholder='Search' />
                                    </div>
                                    <div className="form-group">
                                        <button onClick={search} className="btn btn-block">Search</button>
                                    </div>
                                </div>
                                <div className="popular-artical">-
                                    <div className="title">-
                                        <h3>Popular Artical</h3>
                                    </div>

                                    <PopularArtical />

                                </div>
                                <div className="flow-facebook">
                                    <div className="title">
                                        <h3>Follwing Me</h3>
                                    </div>
                                    <div className="image">
                                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIslam-100798538341988&tabs=timeline&width=340&height=148&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style={{
                                            width: "340px", height: "145px", border: 'none', overflow: 'hidden', scrolling: "no", frameborder: "0", allowfullscreen: "true", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        }}></iframe>
                                    </div>
                                </div>
                                <div className="category">
                                    <div className="title">
                                        <h3>Category</h3>
                                    </div>
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
                                    <ul>
                                        {
                                            homeTag.length > 0 && homeTag?.map((tag, index) => <li key={index}><Link to={`/artical/tag/${tag.split(' ').join('-')}`}>{tag}</Link></li>
                                            )
                                        }

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <CreateAt />
            <div onClick={scrollTop} id="scroll">
                <button className="scroll-btn">
                    <span><FaArrowUp /></span>
                </button>
            </div>
        </div>
    )
}


export default Home;