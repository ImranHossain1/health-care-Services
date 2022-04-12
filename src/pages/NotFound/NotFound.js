import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'
const NotFound = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={notfound} alt=""  className='img-fluid w-75'/>
            <Button  as={Link} to="/" className='rounded-pill button px-5 py-3'>Go Back</Button>
        </div>
    );
};

export default NotFound;