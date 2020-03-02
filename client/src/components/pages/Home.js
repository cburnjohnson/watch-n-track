import React, { useContext } from 'react';

import Movies from '../movies/Movies';
import TvShows from '../tvshows/TvShows';
import Anime from '../anime/Anime';
import SearchBar from '../layout/SearchBar';

import MovieContext from '../../context/movie/movieContext';

const Home = () => {
    const movieContext = useContext(MovieContext);
    const { movies, filtered } = movieContext;

    return (
        <div>
            <SearchBar />
            <div className="watched-list">
                <Movies
                    length={filtered !== null ? filtered.length : movies.length}
                />
                <TvShows />
                <Anime />
            </div>
        </div>
    );
};

export default Home;
