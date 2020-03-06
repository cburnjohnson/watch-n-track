import React, { useContext, useEffect } from 'react';

import Movies from '../movies/Movies';
import TvShows from '../tvshows/TvShows';
import Anime from '../anime/Anime';
import SearchBar from '../layout/SearchBar';
import Collapsible from 'react-collapsible';
import MovieForm from '../movies/MovieForm';

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
    const { tvShows, filtered: filteredTvShows } = tvShowContext;
    const { anime, filtered: filteredAnime } = animeContext;

    useEffect(() => {
        authContext.loadUser();
        getMovies();
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
                    <Collapsible trigger={`Movies (0)`}>
                        <MovieForm />
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

                <Anime
                    quantity={
                        filteredMovies !== null ||
                        filteredTvShows !== null ||
                        filteredAnime !== null
                            ? filteredAnime.length
                            : anime.length
                    }
                />
            </div>
        </div>
    );
};

export default Home;
