import React, { useReducer } from 'react';

import tvShowReducer from './tvShowReducer';
import TvShowContext from './tvShowContext';

import {
    ADD_TV_SHOW,
    GET_TV_SHOWS,
    UPDATE_TV_SHOW,
    DELETE_TV_SHOW,
    FILTER,
    CLEAR_FILTER
} from '../types';

const TvShowState = props => {
    const initialState = {
        tvShows: [
            {
                _id: 1,
                name: 'Pickle TV SHOW',
                season: '1',
                episode: '12'
            },
            {
                _id: 2,
                name: 'Pickle TV SHOW',
                season: '13',
                episode: '12'
            },
            {
                _id: 3,
                name: 'Pickle TV SHOW',
                season: '12',
                episode: '19'
            }
        ],
        filtered: []
    };

    const [state, dispatch] = useReducer(tvShowReducer, initialState);

    // Add TV Show
    const addTvShow = tvShow => {
        dispatch({ type: ADD_TV_SHOW, payload: tvShow });
    };

    // Get users TV shows
    const getTvShows = () => {
        console.log('get tv show');
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
    const filterTvShows = tvShow => {
        dispatch({ type: FILTER, payload: tvShow });
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
