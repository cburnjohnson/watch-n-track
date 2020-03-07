import {
    ADD_ANIME,
    GET_ANIME,
    UPDATE_ANIME,
    DELETE_ANIME,
    FILTER,
    CLEAR_FILTER,
    CLEAR_STATE
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_ANIME:
            return {
                ...state,
                anime: action.payload
            };
        case ADD_ANIME:
            return {
                ...state,
                anime: [action.payload, ...state.anime]
            };
        case UPDATE_ANIME:
            return {
                ...state,
                anime: state.anime.map(animeItem =>
                    animeItem._id === action.payload._id
                        ? action.payload
                        : animeItem
                )
            };
        case DELETE_ANIME:
            return {
                ...state,
                anime: state.anime.filter(
                    animeItem => animeItem._id !== action.payload
                )
            };
        case FILTER:
            return {
                ...state,
                filtered: state.anime.filter(animeItem => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return animeItem.name.match(regex);
                })
            };

        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case CLEAR_STATE:
            return {
                ...state,
                anime: null,
                filtered: null
            };

        default:
            return state;
    }
};
