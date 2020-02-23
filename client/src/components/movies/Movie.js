import React, { useContext } from 'react';

import MovieContext from '../../context/movie/movieContext';

const Movie = ({ movie }) => {
    const movieContext = useContext(MovieContext);

    const { deleteMovie, updateMovie } = movieContext;

    const { _id, name } = movie;

    const onDelete = () => {
        deleteMovie(_id);
    };

    const onUpdate = e => {
        updateText(e);
        updateMovie(_id);
    };

    const updateText = e => {
        const movieEl = e.target.parentElement.previousSibling;
        if (document.activeElement !== movieEl) {
            movieEl.contentEditable = true;
            movieEl.focus();
        } else {
            movieEl.contentEditable = false;
        }
    };

    const onFocus = () => {
        document.execCommand('selectAll', false, null);
    };

    const onKeyPress = e => {
        if (e.target) {
            const movieEl = e.target;
            if (e.charCode === 13 && document.activeElement === movieEl) {
                document.activeElement.contentEditable = false;
            }
        }
    };

    const onBlur = e => {
        e.target.contentEditable = false;
    };

    return (
        <li>
            <span onFocus={onFocus} onKeyPress={onKeyPress} onBlur={onBlur}>
                {name}
            </span>
            <div>
                <i className='edit-icon fas fa-edit' onClick={onUpdate}></i>
                <i className='delete-icon fas fa-trash' onClick={onDelete}></i>
            </div>
        </li>
    );
};

export default Movie;
