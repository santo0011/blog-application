
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { delete_tag, get_tag, messageClear } from '../../store/Reducers/tagReducer';
import Pagination from '../home/Pagination';


const AllTag = () => {

    const dispatch = useDispatch();

    const { allTag, tagCount, successMessage } = useSelector(state => state.tag);

    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [parPage, setParPage] = useState(12)


    useEffect(() => {
        const obj = {
            parPage: parseInt(parPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_tag(obj))
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
            dispatch(get_tag(obj))
        }
    }, [successMessage])


    return (
        <div className='all-category'>

            <Helmet>
                <title>All Tag</title>
            </Helmet>

            <div className="show-category-action">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>Tag ({tagCount})</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type="text" placeholder='Search article' className="form-control" />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashboard/add-tag'>Add New</Link>
                    </div>
                </div>
                <div className="height-60vh">
                    <div className="categorys">
                        {
                            allTag && allTag?.map((c, i) => <div key={i} className="category">
                                <div className="name">{c.tagName}</div>
                                <div className="action">
                                    <span><Link to={`/dashboard/tag/edit/${c.tagSlug}`}><MdEdit /></Link></span>
                                    <span onClick={() => dispatch(delete_tag(c._id))}><MdDelete /></span>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                {
                    tagCount >= parPage ?
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={50}
                            parPage={parPage}
                            showItem={Math.floor(tagCount / parPage)}
                        /> : ''
                }

            </div>


        </div>
    )
}


export default AllTag;