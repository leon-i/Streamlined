import * as UserApiUtil from "../util/user_api_util";

export const ADD_TO_CART = "ADD_TO_CART";

const addInCart = (show) => ({
  type: ADD_TO_CART,
  show,
});

export const addToCart = (data) => (dispatch) =>
         UserApiUtil.addToCart(data).then((sth) => dispatch(addInCart(sth)));
