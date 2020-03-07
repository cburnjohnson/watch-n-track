import React, { useReducer } from 'react';

import tvShowReducer from './tvShowReducer';
import TvShowContext from './tvShowContext';

import {
    ADD_TV_SHOW,
    GET_TV_SHOWS,
    UPDATE_TV_SHOW,
    DELETE_TV_SHOW,
    FILTER,
    CLEAR_FILTER,
    REQUEST_ERROR,
    CLEAR_STATE
} from '../types';
import axios from 'axios';

const TvShowState = props => {
    const initialState = {
        tvShows: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(tvShowReducer, initialState);

    // Add TV Show
    const addTvShow = async tvShow => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post('/api/tvshows', tvShow, config);
            dispatch({ type: ADD_TV_SHOW, payload: res.data });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err.response.msg });
        }
    };

    // Get users TV shows
    const getTvShows = async () => {
        try {
            const res = await axios.get('/api/tvshows');
            dispatch({ type: GET_TV_SHOWS, payload: res.data });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err.response.msg });
        }
    };

    // Update TV Show
    const updateTvShow = async tvShow => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.put(
                `/api/tvshows/${tvShow._id}`,
                tvShow,
                config
            );
            dispatch({ type: UPDATE_TV_SHOW, payload: res.data });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err.response.msg });
        }
    };

    // Delete TV Show
    const deleteTvShow = async tvShowId => {
        try {
            await axios.delete(`/api/tvshows/${tvShowId}`);
            dispatch({ type: DELETE_TV_SHOW, payload: tvShowId });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err.response.msg });
        }
    };

    // Filter TV Shows
    const filterTvShows = text => {
        dispatch({ type: FILTER, payload: text });
    };

    // Clear TV Show Filter
    const clearTvShowFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    // Clear TV shows from state
    const clearTvShows = () => {
        dispatch({ type: CLEAR_STATE });
    };

    return (
        <TvShowContext.Provider
            value={{
                tvShows: state.tvShows,
                filtered: state.filtered,
                addTvShow,
                getTvShows,
                updateTvShow,
                deleteTvShow,
                filterTvShows,
                clearTvShowFilter,
                clearTvShows
            }}
        >
            {props.children}
        </TvShowContext.Provider>
    );
};

export default TvShowState;
