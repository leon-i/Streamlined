import { connect } from "react-redux";
import AddToCartButton from "./add_to_cart_button";
import { addToCart } from "../../actions/user_actions";

const msp = (state) => ({
  currentUserId: state.session.user.id,
});

const mdp = (dispatch) => ({
  addToCart: (title) => dispatch(addToCart(title)),
});

export default connect(msp, mdp)(AddToCartButton);
