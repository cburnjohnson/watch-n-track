import {
    ADD_TV_SHOW,
    GET_TV_SHOWS,
    UPDATE_TV_SHOW,
    DELETE_TV_SHOW
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_TV_SHOW:
            return {
                ...state,
                tvShows: [action.payload, ...state.tvShows]
            };
        case DELETE_TV_SHOW:
            return {
                ...state,
                tvShows: state.tvShows.filter(
                    tvShow => tvShow._id !== action.payload
                )
            };
    }
};
