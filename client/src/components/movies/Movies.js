import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import Collapsible from 'react-collapsible';
import Movie from './Movie';
import MovieForm from './MovieForm';

import MovieContext from '../../context/movie/movieContext';

const Movies = ({ length }) => {
    const movieContext = useContext(MovieContext);

    const { movies, filtered } = movieContext;

    return (
        <Collapsible trigger={`Movies (${length})`}>
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
    length: PropTypes.string.isRequired
};

export default Movies;
