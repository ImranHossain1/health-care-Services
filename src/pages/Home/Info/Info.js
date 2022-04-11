import React from 'react';
import './Info.css'
import { Button, Card, CardGroup } from 'react-bootstrap';
import info1 from '../../../images/info/info1.jpg';
import info2 from '../../../images/info/info2.jpg';
import info3 from '../../../images/info/info3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendar, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Info = () => {
    return (
        <CardGroup className='d-flex flex-column flex-lg-row '>
            <Card className="bg-dark text-white m-0 info-container">
                <Card.Img src={info1} alt="Card image" className='images' />
                <Card.ImgOverlay className='background'>
                   <div className='d-flex justify-content-center align-items-center mt-5'>
                    <div><FontAwesomeIcon icon={faClock} className="faIcons"/></div>
                        <div>
                            <h3 className='text-center'>OPEN HOURS</h3>
                            <ul className='p-3'>
                                <li className='d-flex justify-content-between'>
                                    <span>Monday-Friday</span>
                                    <span className='ms-3'>9am - 10pm</span>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <span>Saturday</span>
                                    <span>closed</span>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <span>Sunday</span>
                                    <span>closed</span>
                                </li>
                            </ul>
                        </div>
                   </div>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white m-0 info-container">
                <Card.Img src={info2} alt="Card image" className='images'/>
                <Card.ImgOverlay className='background2'>
                   <div className='d-flex justify-content-center align-items-center mt-5'>
                    <div><FontAwesomeIcon icon={faCalendar} className="faIcons"/></div>
                        <div className='text-center ms-2'>
                            <h3>APPOINTMENT</h3>
                            <p>Appointment are available, call us <br/> today or book a appointment</p>
                            <Button  as={Link} to="/doctors" className='rounded-pill button'>Book Now</Button>
                        </div>
                   </div>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white m-0 info-container">
                <Card.Img src={info3} alt="Card image" className='images'/>
                <Card.ImgOverlay className='background'>
                   <div className='d-flex justify-content-center align-items-center mt-5'>
                    <div><FontAwesomeIcon icon={faDollar} className="faIcons"/></div>
                        <div className='text-center ms-2'>
                            <h3>ONLINE BILL SYSTEM</h3>
                            <p>You can pay the bill either Cash or Online</p>
                        </div>
                   </div>
                </Card.ImgOverlay>
            </Card>
        </CardGroup>
    );
};

export default Info;