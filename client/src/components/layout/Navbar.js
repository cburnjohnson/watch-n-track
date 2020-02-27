import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/cinema-logo.png';

const Navbar = () => {
    const onLogout = () => {
        console.log('logged out');
    };

    return (
        <nav>
            <h1>
                <i className='far fa-file-video'></i>
                Watch <span>N</span> Track
            </h1>

            <ul>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <a onClick={onLogout}>Logout</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
