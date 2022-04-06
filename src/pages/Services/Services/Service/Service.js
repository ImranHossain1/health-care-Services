import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Service = (props) => {
    const {service}= props;
    const {serviceId} = useParams();
    let selectedService= {};
    // const selectedService = service.filter(s => s.key.include(parseInt(serviceId)));
    if(service.key == serviceId){
        //console.log(service);
        selectedService = service;
    }
    console.log(selectedService)
    return (
        <div>
            <h2>{selectedService.service_name}</h2>
        </div>
    );
};

export default Service;