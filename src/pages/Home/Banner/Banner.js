import React from 'react';
import './Banner.css'
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner4.jpg';
import banner2 from '../../../images/banner/banner5.jpg';
import banner3 from '../../../images/banner/banner8.webp';
const Banner = () => {
    return (
        <>
            <Carousel fade className='carousel-container' variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel-caption-left'>
                    <div className='responsive'>
                            <h3 className='fw-bolder fs-1'>YOUR <span className='heading'>HEALTH</span></h3>
                            <h3 className='fs-2'>OUR FIRST PRIORITY</h3>
                            <h4 className='fs-3 slogan'>We Serve Better Than Any Other</h4>
                            <p className='fs-6 fw-bold'>Not Sure what is going on, come in Today for a Symptom check up, There are many Process</p>
                        </div>
                        <Button variant="primary" className='rounded-pill px-3 py-2'>Make An Appointment Today</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption className='carousel-caption-left'>
                        <div className='responsive'>
                            <h3 className='fw-bolder fs-1'>YOUR <span className='heading'>HEALTH</span></h3>
                            <h3 className='fs-2'>OUR FIRST PRIORITY</h3>
                            <h4 className='fs-3 slogan'>We Serve Better Than Any Other</h4>
                            <p className='fs-6 fw-bold'>Not Sure what is going on, come in Today for a Symptom check up, There are many Process</p>
                        </div>
                        <Button variant="primary" className='rounded-pill px-3 py-2'>Make An Appointment Today</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                <Carousel.Caption className='carousel-caption-left'>
                    <div className='responsive'>
                            <h3 className='fw-bolder fs-1'>YOUR <span className='heading'>HEALTH</span></h3>
                            <h3 className='fs-2'>OUR FIRST PRIORITY</h3>
                            <h4 className='fs-3 slogan'>We Serve Better Than Any Other</h4>
                            <p className='fs-6 fw-bold'>Not Sure what is going on, come in Today for a Symptom check up, There are many Process</p>
                    </div>
                    <Button variant="primary" className='rounded-pill px-3 py-2'>Make An Appointment Today</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>  
        </>
    );
};

export default Banner;