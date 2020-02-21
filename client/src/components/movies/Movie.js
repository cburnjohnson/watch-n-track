import React, { useContext } from 'react';

import MovieContext from '../../context/movie/movieContext';

const Movie = ({ movie }) => {
    const movieContext = useContext(MovieContext);

    const { deleteMovie } = movieContext;

    const { _id, name } = movie;

    const onDelete = () => {
        deleteMovie(_id);
    };

    return (
        <li>
            {name}
            <div>
                <i className="edit-icon fas fa-edit"></i>
                <i className="delete-icon fas fa-trash" onClick={onDelete}></i>
            </div>
        </li>
    );
};

export default Movie;
