import React, { useContext, useState } from 'react';

import TvShowContext from '../../context/tvshow/tvShowContext';

const TvShow = ({ tvShow }) => {
    const tvShowContext = useContext(TvShowContext);

    const { deleteTvShow, updateTvShow } = tvShowContext;

    const { _id, name, season, episode } = tvShow;

    const [tvShowState, setTvShowState] = useState(tvShow);

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

    const onInput = e => {
        setTvShowState({
            ...tvShowState,
            [e.target.dataset.info]: e.target.innerHTML
        });
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
        let contentEditableEls = document.querySelectorAll(
            'span[contentEditable=true]'
        );

        contentEditableEls = [...contentEditableEls];

        if (contentEditableEls.length === 0) {
            updateTvShow(tvShowState);
        }
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

                let contentEditableEls = document.querySelectorAll(
                    'span[contentEditable=true]'
                );

                contentEditableEls = [...contentEditableEls];

                if (contentEditableEls.length === 0) {
                    updateTvShow(tvShowState);
                }
            }
        }
    };

    return (
        <>
            <span
                onKeyPress={onKeyPress}
                onBlur={onBlur}
                onFocus={onFocus}
                onInput={onInput}
                data-info='name'
            >
                {name}
            </span>
            <span
                onKeyPress={onKeyPress}
                onBlur={onBlur}
                onFocus={onFocus}
                onInput={onInput}
                data-info='season'
            >
                {season}
            </span>
            <span
                onKeyPress={onKeyPress}
                onBlur={onBlur}
                onFocus={onFocus}
                onInput={onInput}
                data-info='episode'
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

export default TvShow;
