import { connect } from "react-redux";
import { requestPopular, requestShow } from "../../actions/show_actions";
import PopularIndex from "./popular_index";

const msp = (state) => ({
  shows: state.entities.shows,
});

const mdp = (dispatch) => ({
  requestPopular: () => dispatch(requestPopular()),
  requestShow: (title) => dispatch(requestShow(title)),
});

export default connect(msp, mdp)(PopularIndex);
