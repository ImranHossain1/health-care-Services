import React from 'react';
import './Specializes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseMedicalCircleXmark , faHeartPulse, faTooth} from '@fortawesome/free-solid-svg-icons'
import Specialize from '../Specialize/Specialize';
const Specializes = () => {
    const medical= <FontAwesomeIcon icon={faHouseMedicalCircleXmark} className="icon rounded-circle p-4"/>;
    const tooth =<FontAwesomeIcon icon={faTooth} className="icon rounded-circle p-4"/>
    const heart =<FontAwesomeIcon icon={faHeartPulse} className="icon rounded-circle p-4"/>
    const specializes = [
        {
            key: 1,
            element:medical,
            name: 'Primary Health Care',
            link: '/services/3',
            details: 'Our team of neurologists, psychiatrists, psychologists, sleep medicine specialists, gastroenterologists and pain medicine specialists will utilize several physical and mental exercises to help control patient’s chronic pain and teach a series of exercises that the patient can do at home.'
        },
        {
            key: 2,
            element: tooth,
            name: "Dental Treatment",
            link: '/services/2',
            details: "Department of Dental & Maxillofacial Surgery of Evercare Hospital Dhaka offers full scope of the dental specialty, including general dentistry and sd services in oral & maxillofacial surgery, orthodontics and restorative dentistry (endodontics and prosthodontics)."
        },
        {
            key: 3,
            element: heart,
            name: 'Heart Treatment',
            link: '/services/2',
            details: "The Cardiology Department of Evercare Hospital Dhaka has gained reputation for its dynamic and innovation in the diagnosis, investigation and treatment of patients with all forms of heart diseases, both generally encountered and complex cases."
        }
    ]

    return (
        <div className='specialize-container'>
            <div className=''>
                <h2 className='specialize-heading mb-5'>We Specialize in</h2>
            </div>
            <div className="row w-100">
                {
                    specializes.map(specialize=><Specialize
                        key= {specialize.key}
                        specialize={specialize}
                    ></Specialize>)
                }
            </div>
        </div>
    );
};

export default Specializes;