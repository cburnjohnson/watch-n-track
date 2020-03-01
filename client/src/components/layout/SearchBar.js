import React, { useContext, useRef, useEffect } from 'react';

import MovieContext from '../../context/movie/movieContext';
import TvShowContext from '../../context/tvshow/tvShowContext';
import AnimeContext from '../../context/anime/animeContext';

const SearchBar = () => {
    const movieContext = useContext(MovieContext);
    const tvShowContext = useContext(TvShowContext);
    const animeContext = useContext(AnimeContext);
    const text = useRef('');

    const { filterMovies, clearMovieFilter, filteredMovies } = movieContext;
    const { filterTvShows, clearTvShowFilter, filteredTvShows } = tvShowContext;
    const { filterAnime, clearAnimeFilter, filteredAnime } = animeContext;

    const onChange = e => {
        console.log('change');
    };

    return (
        <form>
            <input
                className="search-bar"
                ref={text}
                type="text"
                onChange={onChange}
                placeholder="Search..."
            />
        </form>
    );
};

export default SearchBar;
