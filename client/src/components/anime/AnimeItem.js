import React, { useContext, useState } from 'react';

import AnimeContext from '../../context/anime/animeContext';

const AnimeItem = ({ anime }) => {
    const animeContext = useContext(AnimeContext);

    const { deleteAnime, updateAnime } = animeContext;

    const { _id, name, season, episode } = anime;

    const [animeState, setAnimeState] = useState(anime);

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

    const onDelete = () => {
        deleteAnime(_id);
    };

    const onInput = e => {
        setAnimeState({
            ...animeState,
            [e.target.dataset.info]: e.target.innerHTML
        });
    };

    const onFocus = () => {
        document.execCommand('selectAll', false, null);
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
            updateAnime(animeState);
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
                    updateAnime(animeState);
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
                className='show-info'
            >
                {name}
            </span>
            <span
                onKeyPress={onKeyPress}
                onBlur={onBlur}
                onFocus={onFocus}
                onInput={onInput}
                data-info='season'
                className='show-info'
            >
                {season}
            </span>
            <span
                onKeyPress={onKeyPress}
                onBlur={onBlur}
                onFocus={onFocus}
                onInput={onInput}
                data-info='episode'
                className='show-info'
            >
                {episode}
            </span>
            <div className='show-info'>
                <i className='edit-icon fas fa-edit' onClick={onUpdate}></i>
                <i className='delete-icon fas fa-trash' onClick={onDelete}></i>
            </div>
        </>
    );
};

export default AnimeItem;
