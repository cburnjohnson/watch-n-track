import React, { useContext, useRef, useEffect } from 'react';

import MovieContext from '../../context/movie/movieContext';
import TvShowContext from '../../context/tvshow/tvShowContext';
import AnimeContext from '../../context/anime/animeContext';

const SearchBar = () => {
    const movieContext = useContext(MovieContext);
    const tvShowContext = useContext(TvShowContext);
    const animeContext = useContext(AnimeContext);

    const onChange = e => {
        console.log('change');
    };

    return (
        <form>
            <input type="text" onChange={onChange} />
        </form>
    );
};

export default SearchBar;
