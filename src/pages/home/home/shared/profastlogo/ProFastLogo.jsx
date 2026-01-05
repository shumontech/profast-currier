import React from 'react';
import logo from '../../../../../assets/Image/logo.png';
import { Link } from 'react-router';

const ProFastLogo = () => {
    return (

        <Link to="/">
        <div className='flex items-end '>
            <img src={logo} alt="" />
            <p className='text-3xl'>ProFast</p>

        </div>
        </Link>
        
    );
};

export default ProFastLogo;