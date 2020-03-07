import React, { useContext, useEffect } from 'react';

import Movies from '../movies/Movies';
import TvShows from '../tvshows/TvShows';
import Anime from '../anime/Anime';
import SearchBar from '../layout/SearchBar';

import AuthContext from '../../context/auth/authContext';
import MovieContext from '../../context/movie/movieContext';
import TvShowContext from '../../context/tvshow/tvShowContext';
import AnimeContext from '../../context/anime/animeContext';
import Collapsible from 'react-collapsible';

const Home = () => {
    const authContext = useContext(AuthContext);
    const movieContext = useContext(MovieContext);
    const tvShowContext = useContext(TvShowContext);
    const animeContext = useContext(AnimeContext);
    const { movies, filtered: filteredMovies, getMovies } = movieContext;
    const { tvShows, filtered: filteredTvShows, getTvShows } = tvShowContext;
    const { anime, filtered: filteredAnime, getAnime } = animeContext;

    useEffect(() => {
        authContext.loadUser();
        getMovies();
        getTvShows();
        getAnime();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <SearchBar />
            <div className='watched-list'>
                {movies !== null && !authContext.loading ? (
                    <Movies
                        quantity={
                            filteredMovies !== null ||
                            filteredTvShows !== null ||
                            filteredAnime !== null
                                ? filteredMovies.length
                                : movies.length
                        }
                    />
                ) : (
                    <Collapsible />
                )}

                {tvShows !== null && !authContext.loading ? (
                    <TvShows
                        quantity={
                            filteredMovies !== null ||
                            filteredTvShows !== null ||
                            filteredAnime !== null
                                ? filteredTvShows.length
                                : tvShows.length
                        }
                    />
                ) : (
                    <Collapsible />
                )}

                {anime !== null && !authContext.loading ? (
                    <Anime
                        quantity={
                            filteredMovies !== null ||
                            filteredTvShows !== null ||
                            filteredAnime !== null
                                ? filteredAnime.length
                                : anime.length
                        }
                    />
                ) : (
                    <Collapsible />
                )}
            </div>
        </div>
    );
};

export default Home;
