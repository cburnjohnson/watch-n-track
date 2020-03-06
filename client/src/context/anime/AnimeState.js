import React, { useReducer } from 'react';
import AnimeContext from './animeContext';
import animeReducer from './animeReducer';
import axios from 'axios';

import {
    ADD_ANIME,
    GET_ANIME,
    UPDATE_ANIME,
    DELETE_ANIME,
    FILTER,
    CLEAR_FILTER,
    REQUEST_ERROR
} from '../types';

const AnimeState = props => {
    const initialState = {
        anime: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(animeReducer, initialState);

    // Add a new Anime
    const addAnime = anime => {
        dispatch({ type: ADD_ANIME, payload: anime });
    };

    // Get all Anime
    const getAnime = async () => {
        try {
            const res = await axios.get('/api/anime');
            dispatch({ type: GET_ANIME, payload: res.data });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err.response.msg });
        }
    };

    // Update an Anime
    const updateAnime = anime => {
        dispatch({ type: UPDATE_ANIME, payload: anime });
    };

    // Delete an Anime
    const deleteAnime = animeId => {
        dispatch({ type: DELETE_ANIME, payload: animeId });
    };

    // Filter Anime
    const filterAnime = text => {
        dispatch({ type: FILTER, payload: text });
    };

    // Clear Anime Filter
    const clearAnimeFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <AnimeContext.Provider
            value={{
                anime: state.anime,
                filtered: state.filtered,
                addAnime,
                getAnime,
                updateAnime,
                deleteAnime,
                filterAnime,
                clearAnimeFilter
            }}
        >
            {props.children}
        </AnimeContext.Provider>
    );
};

export default AnimeState;
