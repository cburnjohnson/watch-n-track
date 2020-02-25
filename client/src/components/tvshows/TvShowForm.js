import React, { useContext, useState } from 'react';

import TvShowContext from '../../context/tvshow/tvShowContext';

const TvShowForm = () => {
    const tvShowContext = useContext(TvShowContext);

    const { addTvShow } = tvShowContext;

    return (
        <form onSubmit={onSubmit} className='list-form'>
            <input
                type='text'
                name='tvShowName'
                id='tvShowName'
                placeholder='Enter TV show name...'
            />
            <input
                type='number'
                name='tvShowSeason'
                id='tvShowSeason'
                placeholder='Season...'
            />
            <input
                type='number'
                name='tvShowEpisode'
                id='tvShowEpisode'
                placeholder='Episode...'
            />
            <button type='submit'>
                <i className='fas fa-plus'></i>
            </button>
        </form>
    );
};

export default TvShowForm;
