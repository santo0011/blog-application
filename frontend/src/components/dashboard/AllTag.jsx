
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const AllTag = () => {
    return (
        <div className='all-category'>

            <Helmet>
                <title>All Tag</title>
            </Helmet>

            <div className="show-category-action">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>(10)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input type="text" placeholder='search article' className="form-control" />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashborad/add-tag'>Add New</Link>
                    </div>
                </div>
                <div className="height-60vh">
                <div className="categorys">
                        {
                            [1,2,3,4,5].map((c,index) => <div key={index} className="category">
                                <div className="name">Tag</div>
                                <div className="action">
                                    <span><Link to={`/dashborad/tag/edit/1234`}><MdEdit /></Link></span>
                                    <span ><MdDelete /></span>
                                </div>
                            </div>) 
                        }
                    </div>
                </div>

            </div>


        </div>
    )
}


export default AllTag;