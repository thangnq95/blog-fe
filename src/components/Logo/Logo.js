import React from 'react';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';

const logo = (props) => (
    <div className="header__logo">
        <Link to="/" className="logo">
            <img src={logoImg} alt="Homepage" />
        </Link>
    </div> 
);

export default logo;