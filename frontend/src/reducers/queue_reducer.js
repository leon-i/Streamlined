import { RECEIVE_QUEUE, RECEIVE_QUEUE_ITEM, CLEAR_QUEUE } from '../actions/queue_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_QUEUE:
            debugger
            return action.queue.data;
        case RECEIVE_QUEUE_ITEM:
            debugger
            return Object.assign({}, state, { [action.queueItem.data.mediaId]: action.queueItem.data });
        case CLEAR_QUEUE:
            return {};
        default:
            return state;
    }
}