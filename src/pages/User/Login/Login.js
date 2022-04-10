import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const [,{signInUsingGoogle, error, processLogin, email, setEmail, password,setPassword}] = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri =  location.state?.from || '/home';
    const handleGoogleLogIn=()=>{
        signInUsingGoogle()
            .then(result =>{
                navigate(redirect_uri);

            })
    }
    let handleEmailChange = e =>{
        setEmail(e.target.value);
        //console.log(e.target.value)

    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    const handleRegistration= (e)=>{
        e.preventDefault();
        //console.log(email, password);
        processLogin(email, password)
        .then(result =>{
            navigate(redirect_uri);
        })
    }
    return (
        <div className='mt-5'>
            <div className='form-container mx-auto'>
                <form onSubmit={handleRegistration}>
                    <h3 className='text-center'>Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input type="email" onBlur={handleEmailChange} className="form-control" placeholder="Enter email" required />
                    </div>
                    <div className="form-group my-3">
                        <label>Password</label>
                        <input type="password" onBlur={handlePasswordChange} className="form-control" placeholder="Enter password" required/>
                    </div>
                    <div className='text-center my-3'>
                        <p className='text-danger'>{error}</p>
                    </div>
                    <div className='text-center my-3'>
                        <button type="submit" className="btn btn-primary btn-block my-3">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                    
                </form>
            </div>
            <div className='text-center'>
                <button onClick={handleGoogleLogIn} className='btn btn-warning'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
