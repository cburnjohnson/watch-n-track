import {
    ADD_TV_SHOW,
    GET_TV_SHOWS,
    UPDATE_TV_SHOW,
    DELETE_TV_SHOW,
    FILTER,
    CLEAR_FILTER,
    REQUEST_ERROR,
    CLEAR_STATE
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_TV_SHOWS:
            return {
                ...state,
                tvShows: action.payload,
                loading: false
            };
        case ADD_TV_SHOW:
            return {
                ...state,
                tvShows: [action.payload, ...state.tvShows],
                loading: false
            };
        case UPDATE_TV_SHOW:
            return {
                ...state,
                tvShows: state.tvShows.map(tvShow =>
                    tvShow._id === action.payload._id ? action.payload : tvShow
                ),
                loading: false
            };
        case DELETE_TV_SHOW:
            return {
                ...state,
                tvShows: state.tvShows.filter(
                    tvShow => tvShow._id !== action.payload
                ),
                loading: false
            };
        case FILTER:
            return {
                ...state,
                filtered: state.tvShows.filter(tvShow => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return tvShow.name.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case REQUEST_ERROR:
            return {
                ...state
            };
        case CLEAR_STATE:
            return {
                ...state,
                tvShows: null,
                filtered: null
            };
        default:
            return state;
    }
};
