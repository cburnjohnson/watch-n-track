import React from 'react';

import Movies from '../movies/Movies';
import TvShows from '../tvshows/TvShows';
import Anime from '../anime/Anime';
import SearchBar from '../layout/SearchBar';

const Home = () => {
    return (
        <div>
            <SearchBar />
            <div className="watched-list">
                <Movies />
                <TvShows />
                <Anime />
            </div>
        </div>
    );
};

export default Home;
