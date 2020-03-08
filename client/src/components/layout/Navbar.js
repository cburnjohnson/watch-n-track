import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';
import MovieContext from '../../context/movie/movieContext';
import TvShowContext from '../../context/tvshow/tvShowContext';
import AnimeContext from '../../context/anime/animeContext';

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const movieContext = useContext(MovieContext);
    const tvShowContext = useContext(TvShowContext);
    const animeContext = useContext(AnimeContext);

    const { logout, user, isAuthenticated } = authContext;

    const onLogout = () => {
        logout();
        movieContext.clearMovies();
        tvShowContext.clearTvShows();
        animeContext.clearAnime();
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
                <span className='nav-title'>
                    Watch <span className='highlight'>N</span> Track
                </span>
            </h1>

            <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
        </nav>
    );
};

export default Navbar;
