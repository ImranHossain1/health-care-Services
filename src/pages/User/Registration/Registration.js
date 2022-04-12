import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Registration.css'
const Registration = () => {
    const [,{signInUsingGoogle,setUserName, verifyEmail, error, setError,registerNewUser, email, setEmail, password,setPassword, setName}] = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = '/home';
    const handleGoogleLogIn=()=>{
        signInUsingGoogle()
            .then(result =>{
                navigate(redirect_uri);
            })
            .catch(error=>{
                setError(error.message)
            })
    }
    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
        //console.log(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    const handleRegistration= (e)=>{
        e.preventDefault();
        //console.log(email, password);
        if(password.length < 6){
          setError("Password must be 6 character long")
          return ;
        }
        if(!/(?=.*[A-Z])(?=.*[A-Z])/.test(password)){
          setError("Password must contain two upper case")
          return;
        }
        registerNewUser(email, password)
        .then(result =>{
            navigate(redirect_uri);
            const loggedUser = result.user;
            console.log(loggedUser)
            setError("");
            verifyEmail();
            setUserName();
        })
        .catch(error=>{
           setError(error.message)
       })
    }
    return (
        <div className='mt-5'>
            <div className='form-container mx-auto'>
                <form onSubmit={handleRegistration}>
                    <h3 className='text-center'>Registration</h3>
     
                    <div className="form-group mt-3">
                        <label>Name</label>
                        <input type="text" onBlur={handleNameChange} className="form-control" placeholder="Enter your full name" required />
                    </div>
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
                        <p>Already have an account? <Link to='/login'>Please Login</Link></p> 
                    </div>
                    
                </form>
            </div>
            <div className='text-center'>
                <button onClick={handleGoogleLogIn} className='btn btn-warning'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Registration;
