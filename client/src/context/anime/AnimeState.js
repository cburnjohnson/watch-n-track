import React, { useReducer } from 'react';
import AnimeContext from './animeContext';
import animeReducer from './animeReducer';

const AnimeState = props => {
    const initialState = {
        anime: [
            { _id: 1, name: 'ANIMEE', season: '1', episode: '13' },
            { _id: 2, name: 'ANIMEE', season: '2', episode: '13' },
            { _id: 3, name: 'ANIMEE', season: '13', episode: '13' },
            { _id: 4, name: 'ANIMEE', season: '14', episode: '13' }
        ]
    };

    const [state, dispatch] = useReducer(animeReducer, initialState);

    // Add a new Anime
    const addAnime = () => {
        console.log('added');
    };

    // Get all Anime
    const getAnime = () => {
        console.log('adde');
    };

    // Update an Anime
    const updateAnime = () => {
        console.log('added');
    };

    // Delete an Anime
    const deleteAnime = () => {
        console.log('added');
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
