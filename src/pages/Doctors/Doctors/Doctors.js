import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import Consultant from '../Consultant/Consultant';


const Doctors = () => {
    const {doctors, displayDoctors} = useDoctors();
    //console.log(doctors);
    return (
        <div className='text-center mx-3'>
            <div className="doctor-container">
                {
                    displayDoctors.map(doctor=><Consultant
                        key={doctor.doctor_id}
                        doctor={doctor}
                    ></Consultant>)
                }
            </div>
        </div>
    );
};

export default Doctors;