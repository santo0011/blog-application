import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectRoute = () => {
    const { userInfo } = useSelector(state => state.auth);

    // console.log(userInfo)

    if (!userInfo) {
        return <Navigate to='/admin/login' />
    } else {
        if (userInfo.role === 'admin') {
            return <Outlet />
        } else {
            return <Navigate to='/' />
        }
    }
}

export default ProtectRoute;