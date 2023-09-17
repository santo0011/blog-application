import React, { useEffect, useState } from 'react';
import Navbar from '../home/Navbar';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { messageClear, verify_email } from '../../store/Reducers/authReducer';
import { useNavigate } from 'react-router-dom';


const EmailVerify = () => {

    const { errorMessage, successMessage, loader, authenticate } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [otp, setOtp] = useState("")

    // sendOtp
    const sendOtp = () => {
        dispatch(verify_email(otp))
    }

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
        if (authenticate) {
            navigate('/dashboard', { replace: true })
        }
    }, [errorMessage, successMessage])


    return (
        <div className="verify_email">
            <Navbar />

            <div className="verify">
                <div className="otp">
                    <p>Check your email and submit OTP</p>
                    <div className="form-group">
                        <input onChange={(e) => setOtp(e.target.value)} type="text" className='form-control' id='otp' placeholder='Enter otp' />
                    </div>
                    <div className="form-group">
                        {
                            loader ? <button className="btn btn-block">
                                <div className="spinner">
                                    <div className="spinner1"></div>
                                    <div className="spinner2"></div>
                                    <div className="spinner3"></div>
                                </div>
                            </button> : <button onClick={sendOtp} className="btn btn-block">
                                Register
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EmailVerify;