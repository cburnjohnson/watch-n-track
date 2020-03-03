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
        if (movie.name === '') {
            return;
        }
        addMovie(movie);
        clearField(e);
    };

    const clearField = () => {
        document.getElementById('movieName').value = '';
        setMovie({
            name: ''
        });
    };

    return (
        <form onSubmit={onSubmit} id="movieForm" className="list-form">
            <input
                type="text"
                name="name"
                id="movieName"
                onChange={onChange}
                placeholder="Movie name..."
            />
            <button type="submit">
                <i className="fas fa-plus"></i>
            </button>
        </form>
    );
};

export default MovieForm;
