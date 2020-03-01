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

    useEffect(() => {
        if (
            filteredMovies === null &&
            filteredTvShows === null &&
            filteredAnime === null
        ) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if (text.current.value !== '') {
            filterMovies(e.target.value);
            filterTvShows(e.target.value);
            filterAnime(e.target.value);
        } else {
            clearMovieFilter();
            clearTvShowFilter();
            clearAnimeFilter();
        }
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
