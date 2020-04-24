import {
  RECEIVE_POPULAR_SHOWS,
  RECEIVE_SHOW,
} from "../actions/show_actions";

const showsReducer = (
  state = { popular: {}, detail: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POPULAR_SHOWS:
      newState.popular = action.shows.data;
      return newState;
    case RECEIVE_SHOW:
      newState.detail = action.show.data;
      return newState;
    default:
      return state;
  }
};

export default showsReducer;
