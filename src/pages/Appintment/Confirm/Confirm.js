import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Confirm = () => {
    const location = useLocation()
    const { patientName,doctorName } = location.state
    
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5 px-4 text-center'>
            <h2>{patientName} have successfully got appointment under {doctorName}</h2>
            <Link to='/home'>
                <Button className='mt-3'>Go to home</Button>
            </Link>
        </div>
    );
};

export default Confirm;