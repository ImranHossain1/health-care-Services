import React, { useState } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Appointment.css'
import { Button } from 'react-bootstrap';
import useDoctors from '../../../hooks/useDoctors';
import useAuth from '../../../hooks/useAuth';
import AppointmentDetail from '../AppointmentDetail/AppointmentDetail';

const Appointment = (props) => {
    const {doctorId} = useParams();
    const location = useLocation()
    return (  location.state?
                <AppointmentDetail
                    doctorName={location.state.doctorName}
                    doctorFee={location.state.fee}
                    id={doctorId}
                ></AppointmentDetail>
                
                :
                <Navigate to='/home'/>
                
            
    );
};

export default Appointment;