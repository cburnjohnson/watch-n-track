import React, { useContext, useState } from 'react';

import TvShowContext from '../../context/tvshow/tvShowContext';

const TvShowForm = () => {
    const tvShowContext = useContext(TvShowContext);

    const { addTvShow } = tvShowContext;

    const [tvShowState, setTvShowState] = useState({
        tvShowName: '',
        tvShowSeason: '',
        tvShowEpisode: ''
    });

    const onSubmit = e => {
        e.preventDefault();
        if (
            tvShowState.tvShowName === '' ||
            tvShowState.tvShowSeason === '' ||
            tvShowState.tvShowEpisode === ''
        ) {
            return;
        }
        const tvShow = {
            name: tvShowState.tvShowName,
            season: tvShowState.tvShowSeason,
            episode: tvShowState.tvShowEpisode
        };
        addTvShow(tvShow);
        clearFields();
    };

    const onChange = e => {
        setTvShowState({ ...tvShowState, [e.target.name]: e.target.value });
    };

    const clearFields = () => {
        document.getElementById('tvShowName').value = '';
        document.getElementById('tvShowSeason').value = '';
        document.getElementById('tvShowEpisode').value = '';

        setTvShowState({
            tvShowName: '',
            tvShowSeason: '',
            tvShowEpisode: ''
        });
    };

    return (
        <form onSubmit={onSubmit} className='list-form'>
            <input
                type='text'
                name='tvShowName'
                id='tvShowName'
                placeholder='TV show name...'
                onChange={onChange}
            />
            <input
                type='number'
                name='tvShowSeason'
                id='tvShowSeason'
                placeholder='Season...'
                onChange={onChange}
                className='input-placeholder'
            />
            <input
                type='number'
                name='tvShowEpisode'
                id='tvShowEpisode'
                placeholder='Episode...'
                onChange={onChange}
            />
            <button type='submit'>
                <i className='fas fa-plus'></i>
            </button>
        </form>
    );
};

export default TvShowForm;
