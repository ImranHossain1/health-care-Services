import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Consultant = ({doctor}) => {
    const {doctor_name,doctor_image, doctor_position,doctor_degree, doctor_id, doctor_fees}= doctor;
    // const doctor_state= [doctor_name , doctor_fees]
    return (
        <div className="doctor pb-3 my-2">
            <img src={doctor_image} alt="" className='rounded-circle p-5 w-75 img-fluid'/>
            <div className='pb-4'>
                <h3>{doctor_name}</h3>
                <h6>{doctor_degree}</h6>
                <p className="px-3">{doctor_position}</p>
                <p>Doctor Fee: {doctor_fees}</p>
                <Link to={`/appointment/${doctor_id}`} state={{ doctorName: doctor_name,fee: doctor_fees }} >
                    <button className='btn btn-warning'>Make an Appintment</button>
                </Link>
            </div>
        </div>
    );
};

export default Consultant;