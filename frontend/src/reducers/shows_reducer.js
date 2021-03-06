import {
  RECEIVE_POPULAR_SHOWS,
  RECEIVE_SHOW,
  RECEIVE_USER_SHOWS,
} from "../actions/show_actions";

const showsReducer = (
  state = { popular: {}, user: {}, detail: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    //todo receive popular shows and receive user's shows
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
