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
    CLEAR_FILTER,
    REQUEST_ERROR
} from '../types';

const MovieState = props => {
    const initialState = {
        movies: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(movieReducer, initialState);

    // Add Movie
    const addMovie = async movie => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/movies', movie, config);
            dispatch({ type: ADD_MOVIE, payload: res.data });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err.response.msg });
        }
    };

    // Get Movies
    const getMovies = async () => {
        try {
            const res = await axios.get('/api/movies');
            console.log(res);
            dispatch({ type: GET_MOVIES, payload: res.data });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err.response.msg });
        }
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
