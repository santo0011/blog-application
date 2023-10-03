import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { delete_category, get_all_category, messageClear } from '../../store/Reducers/categoryReducer';
import Pagination from '../home/Pagination';
import { confirmMessagge, showSuccessMessage } from '../../utils/aleartFunc';


const AllCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { allCategory, categoryCount, successMessage } = useSelector(state => state.category);


    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const [parPage, setParPage] = useState(12)


    useEffect(() => {
        const obj = {
            parPage: parseInt(parPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_all_category(obj))
    }, [searchValue, currentPage, parPage])


    // delete_category_func
    const delete_category_func = async (id) => {
        const returnValue = await confirmMessagge();
        if (returnValue) {
            dispatch(delete_category(id))
        }
    }


    useEffect(() => {
        const obj = {
            parPage: '',
            page: '',
            searchValue: ''
        }

        if (successMessage) {
            showSuccessMessage(successMessage)
            dispatch(messageClear());
            dispatch(get_all_category(obj))
        }
    }, [successMessage])


    return (
        <div className='all-category'>
            <Helmet>
                <title>All Category</title>
            </Helmet>

            <div className="show-category-action">
                <div className="numof-search-newAdd">
                    <div className="numof">
                        <h2>Category ({categoryCount && categoryCount})</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder='Search article' className="form-control" />
                        </div>
                        <span><FaSearch /></span>
                    </div>
                    <div className="newAdd">
                        <Link className='btn' to='/dashboard/add-category'>Add New</Link>
                    </div>
                </div>
                <div className="height-60vh">
                    <div className="categorys">
                        {
                            allCategory && allCategory?.map(c => <div className="category">
                                <div className="name">{c.categoryName}</div>
                                <div className="action">
                                    <span><Link to={`/dashboard/category/edit/${c.categorySlug}`}><MdEdit /></Link></span>
                                    <span onClick={() => delete_category_func(c._id)}><MdDelete /></span>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

                {
                    categoryCount >= parPage ?
                        <Pagination
                            pageNumber={currentPage}
                            setPageNumber={setCurrentPage}
                            totalItem={categoryCount}
                            parPage={parPage}
                            showItem={Math.floor(categoryCount / parPage)}
                        /> : ''
                }
            </div>

        </div>
    )
}

export default AllCategory;