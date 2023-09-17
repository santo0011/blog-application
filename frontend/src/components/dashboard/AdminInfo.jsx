import React from 'react';
import { Link } from 'react-router-dom';

const AdminInfo = () => {

    const logout = () => {

    }

    return (
        <div className='adminInfo'>
            <div className="image-email">
                <img src="http://localhost:3000/userImage/userImg.jpeg" alt="img" />
                <span>santo@gmail.com</span>
            </div>
            <ul>
                <li><Link to='/dashboard/profile'>Profile</Link></li>
                <li><Link to='/'>View site</Link></li>
                <li onClick={logout}><span>Logout</span></li>
            </ul>
        </div>
    )
}

export default AdminInfo;