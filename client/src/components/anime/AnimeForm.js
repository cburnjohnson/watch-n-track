import React, { useContext, useState } from 'react';

import AnimeContext from '../../context/anime/animeContext';

const AnimeForm = () => {
    const animeContext = useContext(AnimeContext);

    const { addAnime } = animeContext;

    const [anime, setAnime] = useState({
        name: '',
        season: '',
        episode: ''
    });

    const onSubmit = e => {
        e.preventDefault();
        if (anime.name === '' || anime.season === '' || anime.episode === '') {
            return;
        }

        addAnime(anime);
        clearFields();
    };

    const clearFields = () => {
        document.getElementById('animeName').value = '';
        document.getElementById('animeSeason').value = '';
        document.getElementById('animeEpisode').value = '';

        setAnime({
            name: '',
            season: '',
            episode: ''
        });
    };

    const onChange = e => {
        setAnime({ ...anime, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={onSubmit} className='list-form'>
            <input
                type='text'
                name='name'
                id='animeName'
                placeholder='Enter anime name...'
                onChange={onChange}
            />
            <input
                type='number'
                name='season'
                id='animeSeason'
                placeholder='Season...'
                onChange={onChange}
            />
            <input
                type='number'
                name='episode'
                id='animeEpisode'
                placeholder='Episode...'
                onChange={onChange}
            />
            <button type='submit'>
                <i className='fas fa-plus'></i>
            </button>
        </form>
    );
};

export default AnimeForm;
