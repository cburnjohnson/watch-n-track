import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/cinema-logo.png';

const Navbar = () => {
    const onLogout = () => {
        console.log('logged out');
    };

    return (
        <nav>
            <img src={logo} alt='Logo' />
            <ul>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a onClick={onLogout}>Logout</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
