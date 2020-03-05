import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import Collapsible from 'react-collapsible';
import Movie from './Movie';
import MovieForm from './MovieForm';

import MovieContext from '../../context/movie/movieContext';

const Movies = ({ quantity }) => {
    const movieContext = useContext(MovieContext);

    const { movies, filtered, getMovies, loading } = movieContext;

    useEffect(() => {
        getMovies();
        // eslint-disable-next-line
    }, []);

    return (
        <Collapsible trigger={`Movies (${quantity})`}>
            <MovieForm />
            <ul>
                {filtered !== null
                    ? filtered.map(movie => (
                          <Movie movie={movie} key={uuidv4()} />
                      ))
                    : movies.map(movie => (
                          <Movie movie={movie} key={uuidv4()} />
                      ))}
            </ul>
        </Collapsible>
    );
};

Movies.propTypes = {
    quantity: PropTypes.number.isRequired
};

export default Movies;
