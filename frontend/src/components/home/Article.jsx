import React from 'react';
import { Link } from 'react-router-dom';


const Article = () => {
    return (
        <>
            {
                [1, 2, 3].map(() => (
                    <div className="home-artical">
                        <div className="row">
                            <div className="col-4">
                                <div className="home-image">
                                    <div className="image">
                                        <img src={`http://localhost:3000/articalImage/ss.jpeg`} alt="img" />
                                        <span>Category</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="home-artical-details">
                                    <div className="title">
                                        <Link to=''>Title</Link>
                                    </div>
                                    <div className="name-time">
                                        <span><Link to='/'>Admin name</Link></span>
                                        <span>24-06-2002</span>
                                    </div>
                                    <div className="artical-text">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
                                    </div>
                                    <div className="read-more">
                                        <button className="read-more-btn">
                                        <Link to={`/artical/details/santo`}>Read more</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default Article;