import { connect } from "react-redux";
import { requestPopular } from "../../actions/show_actions";
import PopularIndex from "./popular_index";

const msp = (state) => ({
  popular: state.entities.shows,
});

const mdp = (dispatch) => ({
  requestPopular: () => dispatch(requestPopular()),
});

export default connect(msp, mdp)(PopularIndex);
