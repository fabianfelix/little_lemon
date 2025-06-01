
import React from 'react';
import Logo from './assets/images/Logo.svg';
import Nav from './Nav';

function Header() {
    return (
        <header className="header">
            <div className="brand">
                <img src={Logo} alt="Restaurant Logo" className="logo"/>
            </div>
            
            <Nav />
            <div className="header-banner">
                <h1 className="main-heading">Welcome</h1>
                <h3 className="sub-heading">Try Great Mediterranean Dishes</h3>
                <button type="button" class="main-btn">Reservation</button>
            </div>
        </header>
    );
}

export default Header;