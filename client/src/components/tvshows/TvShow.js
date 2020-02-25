import React, { useContext } from 'react';

import TvShowContext from '../../context/tvshow/tvShowContext';

const TvShow = ({ tvShow }) => {
    const tvShowContext = useContext(TvShowContext);

    const { deleteTvShow } = tvShowContext;

    const { _id, name, season, episode } = tvShow;

    const onUpdate = e => {
        let previousEl =
            e.target.parentElement.previousSibling.previousSibling
                .previousSibling;
        for (let i = 1; i < 4; i++) {
            previousEl.contentEditable = true;
            previousEl.classList.add('current-edit');
            previousEl.tabIndex = i;
            if (i < 3) {
                previousEl = previousEl.nextSibling;
            }
        }
        previousEl.previousSibling.previousSibling.focus();
    };

    const onFocus = () => {
        document.execCommand('selectAll', false, null);
    };

    const onDelete = () => {
        deleteTvShow(_id);
    };

    return (
        <>
            <span onFocus={onFocus}>{name}</span>
            <span onFocus={onFocus}>{season}</span>
            <span onFocus={onFocus}>{episode}</span>
            <div>
                <i className='edit-icon fas fa-edit' onClick={onUpdate}></i>
                <i className='delete-icon fas fa-trash' onClick={onDelete}></i>
            </div>
        </>
    );
};

export default TvShow;
