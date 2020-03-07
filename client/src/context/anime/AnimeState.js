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
    REQUEST_ERROR,
    CLEAR_STATE
} from '../types';

const AnimeState = props => {
    const initialState = {
        anime: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(animeReducer, initialState);

    // Add a new Anime
    const addAnime = async anime => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/anime', anime, config);
            dispatch({ type: ADD_ANIME, payload: res.data });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err.response.msg });
        }
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
    const updateAnime = async anime => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.put(
                `/api/anime/${anime._id}`,
                anime,
                config
            );
            dispatch({ type: UPDATE_ANIME, payload: res.data });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err.response.msg });
        }
    };

    // Delete an Anime
    const deleteAnime = async animeId => {
        try {
            await axios.delete(`/api/anime/${animeId}`);
            dispatch({ type: DELETE_ANIME, payload: animeId });
        } catch (err) {
            dispatch({ type: REQUEST_ERROR, payload: err.response.msg });
        }
    };

    // Filter Anime
    const filterAnime = text => {
        dispatch({ type: FILTER, payload: text });
    };

    // Clear Anime Filter
    const clearAnimeFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    // Clear Anime from state
    const clearAnime = () => {
        dispatch({ type: CLEAR_STATE });
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
                clearAnimeFilter,
                clearAnime
            }}
        >
            {props.children}
        </AnimeContext.Provider>
    );
};

export default AnimeState;
