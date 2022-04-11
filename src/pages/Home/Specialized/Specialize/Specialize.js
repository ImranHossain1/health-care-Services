import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Specialize = ({specialize}) => {
    const {name, element, details, link} = specialize;
    return (
        <div className="col-lg-4 col-sm-6 col-12p-5 mb-5">
            <div>{element}</div>
            <h3>{name}</h3>
            <p className='px-lg-5'>{details}</p>
            <Link to={link}>
                <Button className='rounded-pill button px-3 py-2'>Read More</Button>
            </Link>
        </div>
    );
};

export default Specialize;