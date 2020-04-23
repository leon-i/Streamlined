import { RECEIVE_QUEUE, RECEIVE_QUEUES } from "../actions/queue_actions";

const queueReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];
  switch (action.type) {
    case RECEIVE_QUEUE:
      newState = action.queue.data;
      return newState;

    default:
      return state;
  }
};

export default queueReducer;
