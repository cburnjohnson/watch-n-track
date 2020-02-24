import React, { useContext } from 'react';

import TvShowContext from '../../context/tvshow/tvShowContext';

const TvShow = ({ tvShow }) => {
    const tvShowContext = useContext(TvShowContext);

    const { deleteTvShow } = tvShowContext;

    const { _id, name, season, episode } = tvShow;

    const onUpdate = () => {
        console.log('fsdf');
    };

    const onDelete = () => {
        deleteTvShow(_id);
    };

    return (
        <>
            <span>{name}</span>
            <span>{season}</span>
            <span>{episode}</span>
            <div>
                <i className='edit-icon fas fa-edit' onClick={onUpdate}></i>
                <i className='delete-icon fas fa-trash' onClick={onDelete}></i>
            </div>
        </>
    );
};

export default TvShow;
