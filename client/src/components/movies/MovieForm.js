import React, { useContext, useState } from 'react';

import MovieContext from '../../context/movie/movieContext';

const MovieForm = () => {
    const movieContext = useContext(MovieContext);

    const { addMovie } = movieContext;

    const [movie, setMovie] = useState({
        name: ''
    });

    const onChange = e => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        addMovie(movie);
    };

    return (
        <form onSubmit={onSubmit}>
            <input type='text' name='name' onChange={onChange} />
            <input type='submit' value='Add Movie' />
        </form>
    );
};

export default MovieForm;
