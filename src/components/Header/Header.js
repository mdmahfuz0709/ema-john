import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <header className='header-area'>
            <nav className='nav-area'>
                <div className="header-logo">
                    <img src={logo} alt="ema-john" />
                </div>
                <div className="header-menu">
                    <ul>
                        <li><a href="#.">Order</a></li>
                        <li><a href="#.">Order Review</a></li>
                        <li><a href="#.">Manage Inventory</a></li>
                        <li><a href="#.">Login</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;