import React, { useContext, useState } from 'react';

import MovieContext from '../../context/movie/movieContext';

const Movie = ({ movie }) => {
    const movieContext = useContext(MovieContext);

    const { deleteMovie, updateMovie } = movieContext;

    const { _id, name } = movie;

    const [movieState, setMovieState] = useState(movie);

    const onDelete = () => {
        deleteMovie(_id);
    };

    const onUpdate = e => {
        updateText(e);
    };

    const onInput = e => {
        setMovieState({ ...movie, name: e.target.innerHTML });
    };

    const updateText = e => {
        const movieEl = e.target.parentElement.previousSibling;
        movieEl.classList.add('current-edit');
        movieEl.contentEditable = true;
        movieEl.focus();
    };

    const onFocus = () => {
        document.execCommand('selectAll', false, null);
    };

    const onKeyPress = e => {
        if (e.target) {
            const movieEl = e.target;
            if (e.charCode === 13 && document.activeElement === movieEl) {
                document.activeElement.contentEditable = false;
                updateMovie(movieState);
            }
        }
    };

    const onBlur = e => {
        e.target.contentEditable = false;
        updateMovie(movieState);
    };

    return (
        <li>
            <span
                onInput={onInput}
                onFocus={onFocus}
                onKeyPress={onKeyPress}
                onBlur={onBlur}
            >
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
