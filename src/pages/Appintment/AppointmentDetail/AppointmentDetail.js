import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AppointmentDetail = (props) => {
    const {doctorName, doctorFee} = props
    const [,{user}] =useAuth();
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5 mb-5 p-3'>
            <img src={user.photoURL} alt="" className='img-fluid rounded-circle'/>
            <h6>Patient Name:</h6>
            <h5> {user.displayName}</h5>
            <h6>Patient Email: </h6>
            <h5>{user.email}</h5>
            <h6>Doctor Name:</h6>
            <h5> {doctorName}</h5>
            <h6>Doctor Fee: </h6>
            <h5>{doctorFee}</h5>
            <Link to={'/confirm'} state={{ patientName: user.displayName,doctorName: doctorName}} >
                    <Button>Confirm your appointment</Button>
            </Link>
        </div>
    );
};

export default AppointmentDetail;