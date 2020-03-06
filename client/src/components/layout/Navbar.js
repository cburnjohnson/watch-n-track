import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
    const authContext = useContext(AuthContext);

    const { logout, user, isAuthenticated } = authContext;

    const onLogout = () => {
        logout();
    };

    const authLinks = (
        <>
            <li>
                <span className='highlight'> {user && user.name}</span>
            </li>
            <li>
                <a onClick={onLogout} href='# '>
                    Logout
                </a>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </>
    );

    return (
        <nav>
            <h1>
                <i className='far fa-file-video'></i>
                Watch <span className='highlight'>N</span> Track
            </h1>

            <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
        </nav>
    );
};

export default Navbar;
