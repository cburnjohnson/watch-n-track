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
        const movie = e.target.parentElement.previousSibling;
        movie.contentEditable = true;
        movie.focus();
    };

    const onFocus = () => {
        document.execCommand('selectAll', false, null);
    };

    return (
        <li>
            <span onFocus={onFocus}>{name}</span>
            <div>
                <i className='edit-icon fas fa-edit' onClick={onUpdate}></i>
                <i className='delete-icon fas fa-trash' onClick={onDelete}></i>
            </div>
        </li>
    );
};

export default Movie;
