import React from 'react';
import './Mission.css';
import img from '../../../images/info/mission.png'

const Mission = () => {
    return (
        <div className='mt-2 mission-container' id='mission'>
            <div>
                <h3 className='fw-bolder fs-3 heading'>VISION</h3> 
                <p>To be the leading integrated healthcare network in Emerging markets, transforming the quality of healthcare and impacting millions of people.</p>
            </div>
            <div>
                <h3 className='fw-bolder fs-3 heading'>MISSION</h3>
                <p>To build a legacy of impact driven, accessible safe and private healthcare for patients in need.</p>
            </div>
            <div>
                <h3 className='fw-bolder fs-3 heading'>VALUES</h3>
                <p>We are committed to providing best-in-class, accessible, private healthcare for all and encourage all our employees and caregivers to share our values:</p>
                <img src={img} alt=""  className='img-fluid'/>
            </div>

        </div>
    );
};

export default Mission;