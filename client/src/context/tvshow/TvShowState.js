import React, { useReducer } from 'react';

import tvShowReducer from './tvShowReducer';
import TvShowContext from './tvShowContext';

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
        ]
    };

    const [state, dispatch] = useReducer(tvShowReducer, initialState);

    // Add TV Show
    const addTvShow = () => {
        console.log('added');
    };

    // Get users TV shows
    const getTvShows = () => {
        console.log('get tv show');
    };

    // Update TV Show
    const updateTvShow = () => {
        console.log('updated tv show');
    };

    // Delete TV Show
    const deleteTvShow = () => {
        console.log('deleted');
    };

    return (
        <TvShowContext.Provider
            value={{
                tvShows: state.tvShows,
                addTvShow,
                getTvShows,
                updateTvShow,
                deleteTvShow
            }}
        >
            {props.children}
        </TvShowContext.Provider>
    );
};

export default TvShowState;
