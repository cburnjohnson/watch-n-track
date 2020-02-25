import React from 'react';

const TvShowForm = () => {
    return (
        <form className='list-form'>
            <input
                type='text'
                name='tvShowName'
                id='tvShowName'
                placeholder='Enter TV show name...'
            />
            <input type='number' name='tvShowSeason' id='tvShowSeason' />
            <input type='number' name='tvShowEpisode' id='tvShowEpisode' />
            <button type='submit'>
                <i class='fas fa-plus'></i>
            </button>
        </form>
    );
};

export default TvShowForm;
