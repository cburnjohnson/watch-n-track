import React, { useContext } from 'react';

import Movie from './Movie';

import MovieContext from '../../context/movie/movieContext';

const Movies = () => {
    const movieContext = useContext(MovieContext);

    const { movies } = movieContext;

    return (
        <div>
            <ul>
                {movies.map(movie => (
                    <Movie movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default Movies;
