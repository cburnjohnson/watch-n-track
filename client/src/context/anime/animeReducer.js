import { ADD_ANIME, GET_ANIME, UPDATE_ANIME, DELETE_ANIME } from '../types';

export default (state, action) => {
    switch (action.type) {
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

        default:
            return state;
    }
};
