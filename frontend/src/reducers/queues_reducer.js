import { RECEIVE_QUEUE, RECEIVE_QUEUES } from "../actions/queue_actions";

const queuesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];
  switch (action.type) {
    case RECEIVE_QUEUE:
      debugger;
      newState = action.queue.data;
      return newState;

    default:
      return state;
  }
};

export default queuesReducer;
