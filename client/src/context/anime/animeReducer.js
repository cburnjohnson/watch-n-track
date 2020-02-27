import { ADD_ANIME, GET_ANIME, UPDATE_ANIME, DELETE_ANIME } from '../types';

export default (state, action) => {
    switch (action.type) {
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
