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
    REQUEST_ERROR
} from '../types';
import axios from 'axios';

const TvShowState = props => {
    const initialState = {
        tvShows: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(tvShowReducer, initialState);

    // Add TV Show
    const addTvShow = tvShow => {
        dispatch({ type: ADD_TV_SHOW, payload: tvShow });
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
    const updateTvShow = tvShow => {
        dispatch({ type: UPDATE_TV_SHOW, payload: tvShow });
    };

    // Delete TV Show
    const deleteTvShow = tvShowId => {
        dispatch({ type: DELETE_TV_SHOW, payload: tvShowId });
    };

    // Filter TV Shows
    const filterTvShows = text => {
        dispatch({ type: FILTER, payload: text });
    };

    // Clear TV Show Filter
    const clearTvShowFilter = () => {
        dispatch({ type: CLEAR_FILTER });
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
                clearTvShowFilter
            }}
        >
            {props.children}
        </TvShowContext.Provider>
    );
};

export default TvShowState;
