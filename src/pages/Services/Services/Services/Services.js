import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {
    const {services} = useAuth();
    return (
        <div>
            {
                services.map(service=><Service
                    key= {service.key}
                    service= {service}
                ></Service>)
            }
        </div>
    );
};

export default Services;