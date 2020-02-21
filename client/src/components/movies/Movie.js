import React from 'react';

const Movie = ({ movie }) => {
    return (
        <li>
            {movie.name} <i className='fas fa-trash'></i>
        </li>
    );
};

export default Movie;
