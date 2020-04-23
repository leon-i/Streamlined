import { ADD_TO_CART } from "../actions/user_actions";

const usersReducer = (state = { info: {}, cart: [] }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_TO_CART:
      newState.cart = action.show.data;
      return newState;

    default:
      return state;
  }
};

export default usersReducer;
