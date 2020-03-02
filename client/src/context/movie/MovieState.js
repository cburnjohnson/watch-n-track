import React, { useReducer } from 'react';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
import axios from 'axios';

import {
    ADD_MOVIE,
    GET_MOVIES,
    UPDATE_MOVIE,
    DELETE_MOVIE,
    FILTER,
    CLEAR_FILTER
} from '../types';

const MovieState = props => {
    const initialState = {
        movies: [
            { _id: 1, name: 'Pickle Man' },
            { _id: 2, name: 'Pickle Man 1' },
            { _id: 3, name: 'Pickle Man 2' },
            { _id: 4, name: 'Pickle Man 3' },
            { _id: 5, name: 'Pickle Man 4' }
        ],
        filtered: null
    };

    const [state, dispatch] = useReducer(movieReducer, initialState);

    // Add Movie
    const addMovie = movie => {
        dispatch({ type: ADD_MOVIE, payload: movie });
    };

    // Get Movies
    const getMovies = () => {
        console.log('get movies');
    };

    // Update Movie
    const updateMovie = movie => {
        dispatch({ type: UPDATE_MOVIE, payload: movie });
    };

    // Delete Movie
    const deleteMovie = movieId => {
        dispatch({ type: DELETE_MOVIE, payload: movieId });
    };

    // Filter Movies
    const filterMovies = text => {
        dispatch({ type: FILTER, payload: text });
    };

    // Clear Movie Filter
    const clearMovieFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <MovieContext.Provider
            value={{
                movies: state.movies,
                filtered: state.filtered,
                addMovie,
                getMovies,
                updateMovie,
                deleteMovie,
                filterMovies,
                clearMovieFilter
            }}
        >
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieState;
