import React from 'react';
import './Doctor.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const {doctor_name,doctor_image, doctor_position,doctor_degree, doctor_id}= props.doctor;
    return (
        <div className="doctor pb-3 my-2">
            <img src={doctor_image} alt="" className='rounded-circle p-5 w-75 h-75'/>
            <div className='pb-4'>
                <h3>{doctor_name}</h3>
                <h6>{doctor_degree}</h6>
                <p className="px-3">{doctor_position}</p>
                <Link to={`/appointment/${doctor_id}`}>
                    <button className='btn btn-warning'>Make an Appintment</button>
                </Link>
            </div>
        </div>
    );
};

export default Doctor;