import { RECEIVE_SHOWS, RECEIVE_SHOW } from "../actions/show_actions";

const showsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHOWS:
      return action.shows;
    case RECEIVE_SHOW:
      return action.show;

    default:
      return state;
  }
};

export default showsReducer;
