import React, { useReducer } from 'react';
import AnimeContext from './animeContext';
import animeReducer from './animeReducer';

import {
    ADD_ANIME,
    GET_ANIME,
    UPDATE_ANIME,
    DELETE_ANIME,
    FILTER,
    CLEAR_FILTER
} from '../types';

const AnimeState = props => {
    const initialState = {
        anime: [
            { _id: 1, name: 'ANIMEE', season: '1', episode: '13' },
            { _id: 2, name: 'ANIMEE', season: '2', episode: '13' },
            { _id: 3, name: 'ANIMEE', season: '13', episode: '13' },
            { _id: 4, name: 'ANIMEE', season: '14', episode: '13' }
        ],
        filtered: []
    };

    const [state, dispatch] = useReducer(animeReducer, initialState);

    // Add a new Anime
    const addAnime = anime => {
        dispatch({ type: ADD_ANIME, payload: anime });
    };

    // Get all Anime
    const getAnime = () => {
        console.log('adde');
    };

    // Update an Anime
    const updateAnime = anime => {
        dispatch({ type: UPDATE_ANIME, payload: anime });
    };

    // Delete an Anime
    const deleteAnime = animeId => {
        dispatch({ type: DELETE_ANIME, payload: animeId });
    };

    // Filter Movies
    const filterMovies = movie => {
        dispatch({ type: FILTER, payload: movie });
    };

    // Clear Movie Filter
    const clearMovieFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <AnimeContext.Provider
            value={{
                anime: state.anime,
                addAnime,
                getAnime,
                updateAnime,
                deleteAnime
            }}
        >
            {props.children}
        </AnimeContext.Provider>
    );
};

export default AnimeState;
