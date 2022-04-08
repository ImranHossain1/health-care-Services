import React from 'react';

const FaQ = (props) => {
    const {key, question, answer, service_img}= props.fq;
    return (
        <div className='mission-container'>
            <h5>Q{key}: {question}</h5>
            <p >{answer}</p>
            <img src={service_img} alt="" className='img-fluid'/>
        </div>
    );
};

export default FaQ;