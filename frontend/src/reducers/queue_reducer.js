import { RECEIVE_QUEUE, RECEIVE_QUEUE_ITEM, REMOVE_FROM_QUEUE, CLEAR_QUEUE } from '../actions/queue_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_QUEUE:
            return action.queue.data;
        case RECEIVE_QUEUE_ITEM:
            return Object.assign({}, state, { [action.queueItem.data.mediaId]: action.queueItem.data });
        case REMOVE_FROM_QUEUE:
            const newState = Object.assign({}, state);
            delete newState[action.queueItemId.data.mediaId];
            return newState;
        case CLEAR_QUEUE:
            return {};
        default:
            return state;
    }
}