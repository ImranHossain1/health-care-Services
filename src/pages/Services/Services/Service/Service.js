import React, { useState } from 'react';
import './Service.css';
import { useParams } from 'react-router-dom';
import Doctor from '../../Doctor/Doctor';
import { Col, Row } from 'react-bootstrap';

const Service = (props) => {
    const {service}= props;
    const {serviceId} = useParams();
    let selectedService= {};
    // const selectedService = service.filter(s => s.key.include(parseInt(serviceId)));
    if(service.key == serviceId){
        //console.log(service);
        selectedService = service;
    }
    const {service_name,service_logo, service_about, doctors, consultation} = selectedService;

    //console.log(doctors)
    return (
        <div>
            {selectedService.key?
                <div>
                    <img src={service_logo} alt="" className='rounded mx-auto d-block img-fluid my-5' />
                    <h1 className='text-center'>{service_name}</h1>
                    <div className='text-center px-3 mt-4'>
                        <h4>ABOUT THE DEPARTMENT</h4>
                        <p className='about'>{service_about}</p>
                    </div>
                    <div className='text-center mx-3'>
                        <h4>CONSULTATION & APPOINTMENT</h4>
                        <p className='about'>{consultation}</p>
                        <div className="doctor-container">

                                {
                                    doctors.map(doctor=><Doctor
                                        key={doctor.doctor_id}
                                        doctor= {doctor}
                                    ></Doctor>)
                                }
                        </div>
                    </div>
                </div>
            :
            <div></div>
            }
            
        </div>
    );
};

export default Service;