import {
    ADD_TV_SHOW,
    GET_TV_SHOWS,
    UPDATE_TV_SHOW,
    DELETE_TV_SHOW,
    FILTER,
    CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_TV_SHOW:
            return {
                ...state,
                tvShows: [action.payload, ...state.tvShows]
            };
        case UPDATE_TV_SHOW:
            return {
                ...state,
                tvShows: state.tvShows.map(tvShow =>
                    tvShow._id === action.payload._id ? action.payload : tvShow
                )
            };
        case DELETE_TV_SHOW:
            return {
                ...state,
                tvShows: state.tvShows.filter(
                    tvShow => tvShow._id !== action.payload
                )
            };
        case FILTER:
            return {
                ...state,
                filtered: state.tvShows.filter(tvShow => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return tvShow.name.match(regex);
                })
            };
        default:
            return state;
    }
};
