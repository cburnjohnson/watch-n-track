import React, { useContext } from 'react';

import TvShowContext from '../../context/tvshow/tvShowContext';

const TvShow = ({ tvShow }) => {
    const tvShowContext = useContext(TvShowContext);

    const { deleteTvShow, updateTvShow } = tvShowContext;

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

    const onBlur = e => {
        e.target.removeAttribute('tabIndex');
        e.target.contentEditable = false;
        e.target.classList.remove('current-edit');
        updateTvShow();
    };

    const onKeyPress = e => {
        if (e.target) {
            const currentEl = e.target;
            if (e.charCode === 13 && document.activeElement === currentEl) {
                e.preventDefault();
                document.activeElement.contentEditable = false;
                if (document.activeElement.tabIndex === 3) {
                    document.activeElement.blur();
                }
                if (document.activeElement.nextSibling !== null) {
                    document.activeElement.nextSibling.focus();
                }
                updateTvShow();
            }
        }
    };

    return (
        <>
            <span onKeyPress={onKeyPress} onBlur={onBlur} onFocus={onFocus}>
                {name}
            </span>
            <span onKeyPress={onKeyPress} onBlur={onBlur} onFocus={onFocus}>
                {season}
            </span>
            <span onKeyPress={onKeyPress} onBlur={onBlur} onFocus={onFocus}>
                {episode}
            </span>
            <div>
                <i className='edit-icon fas fa-edit' onClick={onUpdate}></i>
                <i className='delete-icon fas fa-trash' onClick={onDelete}></i>
            </div>
        </>
    );
};

export default TvShow;
