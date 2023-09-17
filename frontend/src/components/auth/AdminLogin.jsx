import React, { useEffect, useState } from 'react';
import { BsAt } from 'react-icons/bs';
import { FaLock, FaFacebook, FaGoogle } from 'react-icons/fa';
import Navbar from '../home/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loader, authenticate, errorMessage, successMessage } = useSelector((state) => state.auth);

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    // adminLogin
    const adminLogin = (e) => {
        e.preventDefault();
        dispatch(admin_login(state))
    }


    useEffect(() => {
        if (authenticate) {
            navigate('/dashboard', { replace: true })
        }
    }, [successMessage])

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
    }, [errorMessage, successMessage])


    return (
        <>
            <Navbar />
            <div className="admin_login">

                <div className="card">
                    <div className="auth">
                        <h3>Admin login</h3>
                        <form onSubmit={adminLogin}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="icon-input">
                                    <div className="icon"><BsAt /></div>
                                    <input onChange={inputHendle} value={state.email} type="email" name='email' id='email' placeholder='Email' className="form-control" />
                                </div>
                                {/* <p>{errorMessage?.email}</p> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="icon-input">
                                    <div className="icon"><FaLock /></div>
                                    <input onChange={inputHendle} value={state.password} type="password" name='password' id='password' placeholder='Password' className="form-control" />
                                </div>
                                {/* <p>{errorMessage?.password}</p> */}
                            </div>
                            <div className="form-group">
                                {
                                    loader ? <button className="btn btn-block">
                                        <div className="spinner">
                                            <div className="spinner1"></div>
                                            <div className="spinner2"></div>
                                            <div className="spinner3"></div>
                                        </div>
                                    </button> : <button className="btn btn-block">
                                        Login
                                    </button>

                                }
                            </div>
                        </form>
                    </div>
                    <div className="image-logo">
                        <img src="http://localhost:3000/designImage/image4.jpg" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminLogin;
