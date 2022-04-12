import React from 'react';
import ContactBar from '../ContactBar/ContactBar';
import Navigation from '../Navigation/Navigation/Navigation';
import './Header.css'


const Header = () => {
    return (
        <div >
            <div className='header'>
                <Navigation></Navigation>
            </div>
            <ContactBar></ContactBar>
        </div>
    );
};

export default Header;