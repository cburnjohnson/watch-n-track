import {
    ADD_MOVIE,
    GET_MOVIES,
    UPDATE_MOVIE,
    DELETE_MOVIE,
    FILTER,
    CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: [action.payload, ...state.movies]
            };
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(
                    movie => movie._id !== action.payload
                )
            };
        case UPDATE_MOVIE:
            return {
                ...state,
                movies: state.movies.map(movie =>
                    movie._id === action.payload._id ? action.payload : movie
                )
            };
        case FILTER:
            return {
                ...state,
                filtered: state.movies.filter(movie => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return movie.name.match(regex);
                })
            };
        default:
            return state;
    }
};
