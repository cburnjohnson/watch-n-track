import React, { useContext } from 'react';

import AnimeContext from '../../context/anime/animeContext';

const AnimeItem = ({ anime }) => {
    const animeContext = useContext(AnimeContext);

    const { name, season, episode } = anime;

    const onUpdate = () => {
        console.log('fsdf');
    };

    const onDelete = () => {
        console.log('fsdf');
    };

    return (
        <>
            <span
            // onKeyPress={onKeyPress}
            // onBlur={onBlur}
            // onFocus={onFocus}
            // onInput={onInput}
            // data-info='name'
            >
                {name}
            </span>
            <span
            // onKeyPress={onKeyPress}
            // onBlur={onBlur}
            // onFocus={onFocus}
            // onInput={onInput}
            // data-info='season'
            >
                {season}
            </span>
            <span
            // onKeyPress={onKeyPress}
            // onBlur={onBlur}
            // onFocus={onFocus}
            // onInput={onInput}
            // data-info='episode'
            >
                {episode}
            </span>
            <div>
                <i className='edit-icon fas fa-edit' onClick={onUpdate}></i>
                <i className='delete-icon fas fa-trash' onClick={onDelete}></i>
            </div>
        </>
    );
};

export default AnimeItem;
