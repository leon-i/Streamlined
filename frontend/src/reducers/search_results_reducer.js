import { RECEIVE_SEARCH_RESULT, CLEAR_SEARCH_RESULT } from '../actions/search_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SEARCH_RESULT:
            return Object.assign({}, state, { [action.result.data.media.Id]: action.result.data });
        case CLEAR_SEARCH_RESULT:
            return {};
        default:
            return state;
    }
}