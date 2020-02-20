import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
import axios from 'axios';

const MovieState = props => {
    const initialState = {
        movies: [
            { name: 'Pickle Man' },
            { name: 'Pickle Man 1' },
            { name: 'Pickle Man 2' },
            { name: 'Pickle Man 3' },
            { name: 'Pickle Man 4' }
        ]
    };

    const [state, dispatch] = useReducer(movieReducer, initialState);

    // Add Movie
    const addMovie = () => {
        console.log('add movie');
    };

    // Get Movies
    const getMovies = () => {
        console.log('get movies');
    };

    // Update Movie
    const updateMovie = () => {
        console.log('update movie');
    };

    // Delete Movie
    const deleteMovie = () => {
        console.log('deleted movie');
    };

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                addMovie,
                getMovies,
                updateMovie,
                deleteMovie
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieState;
