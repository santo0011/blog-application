import React, { useState } from 'react';
import { BsBell, BsListUl } from "react-icons/bs";
import { FaTrash } from 'react-icons/fa';
import moment from 'moment';
import { Link } from "react-router-dom";
import UserMessage from './UserMessage';
import toast from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AdminInfo from './AdminInfo';


const DashboradNavbar = () => {

    const dispath = useDispatch()

    const profileModel = () => {

    }

    const nModel = () => {

    }
    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [])

    const seenNotification = (id) => {

    }

    return (
        <>
            <div className='dashborad-navbar'>

                <div className="dashborad-navbar-left-side">
                    <label htmlFor="" className='dash'><span>S</span></label>
                    <label className='bar' htmlFor="sidebar"><span><BsListUl /></span></label>
                    <h2><Link to='/dashboard'>Santo Biswas</Link></h2>
                </div>
                <div className="dashborad-navbar-right-side">
                    <h2><Link to='/'><span>View site</span></Link></h2>
                    <div className="search">
                        <input type="text" placeholder='Search' className="form-control" />
                    </div>
                    <div className="user">
                        <div className="natification-message">
                            <div className="natification">
                                <div onClick={nModel}>
                                    <span><BsBell /></span>
                                    <div className="nCount">5</div>
                                </div>
                                {

                                }
                                <div className='show'>
                                    <ul>
                                        {/* {
                                            [1, 2, 3, 4].map(() => (
                                                <li className='seen' key={1}>
                                                    <Link onClick={() => seenNotification(1213)} to={`/artical/details/computer`}>Computer</Link>
                                                    <div className="nDelete"><FaTrash /></div>
                                                </li>
                                            ))
                                        } */}
                                    </ul>
                                </div>
                            </div>
                            <UserMessage />
                        </div>
                        <label onClick={profileModel} htmlFor="adminInfo"><img src="http://localhost:3000/userImage/userImg.jpeg" alt="img" /></label>
                        <div className="name-time">
                            <h3>Santo Biswas</h3>
                            <span>Hi, I am Santo Biswas</span>
                        </div>
                    </div>
                </div>
            </div>
            <AdminInfo />
        </>
    )
}

export default DashboradNavbar;