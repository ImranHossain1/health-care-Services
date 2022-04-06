import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavServices = (props) => {
    const {service_name, key} = props.service;
    //console.log(service_name);
    return (
        <div>
            <NavDropdown.Item as={Link} to={`/services/${key}`} className='service' >{service_name}</NavDropdown.Item>
        </div>
    );
};

export default NavServices;