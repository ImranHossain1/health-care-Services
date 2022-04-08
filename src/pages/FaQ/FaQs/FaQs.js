import React from 'react';
import useFaQ from '../../../hooks/useFaQ';
import FaQ from '../FaQ/FaQ';

const FaQs = () => {
    const {faQ} =useFaQ();
    //console.log(faQ);
    return (
        <div className='mt-5'>
            {
                faQ.map(fq=><FaQ
                    key={fq.key}
                    fq={fq}
                ></FaQ>)
            }
        </div>
    );
};

export default FaQs;