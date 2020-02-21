import React from 'react';

const Movie = ({ movie }) => {
    return (
        <li>
            {movie.name}
            <div>
                <i className='edit-icon fas fa-edit'></i>
                <i className='delete-icon fas fa-trash'></i>
            </div>
        </li>
    );
};

export default Movie;
