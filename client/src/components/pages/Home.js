import React, { useContext, useEffect } from 'react';

import Movies from '../movies/Movies';
import TvShows from '../tvshows/TvShows';
import Anime from '../anime/Anime';
import SearchBar from '../layout/SearchBar';
import Collapsible from 'react-collapsible';
import MovieForm from '../movies/MovieForm';
import TvShowForm from '../tvshows/TvShowForm';
import AnimeForm from '../anime/AnimeForm';

import AuthContext from '../../context/auth/authContext';
import MovieContext from '../../context/movie/movieContext';
import TvShowContext from '../../context/tvshow/tvShowContext';
import AnimeContext from '../../context/anime/animeContext';

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
                {movies !== null &&
                movies.length === 0 &&
                !authContext.loading ? (
                    <Collapsible trigger={`Movies (0)`}>
                        <MovieForm />
                        <h3>Please add a Movie</h3>
                    </Collapsible>
                ) : movies !== null && !authContext.loading ? (
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
                    <h1>Loading</h1>
                )}

                {tvShows !== null &&
                tvShows.length === 0 &&
                !authContext.loading ? (
                    <Collapsible trigger={`TV Shows (0)`}>
                        <TvShowForm />
                        <h3>Please add a Movie</h3>
                    </Collapsible>
                ) : tvShows !== null && !authContext.loading ? (
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
                    <h1>Loading</h1>
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
                    <h1>Loading</h1>
                )}
            </div>
        </div>
    );
};

export default Home;
