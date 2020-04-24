import { connect } from "react-redux";
import { requestPopular, requestShow } from "../../actions/show_actions";
import PopularIndex from "./popular_index";
// import { requestQueue } from "../../actions/queue_actions";

const msp = (state) => ({
  shows: state.entities.shows,
});

const mdp = (dispatch) => ({
  requestPopular: () => dispatch(requestPopular()),
  requestShow: (title) => dispatch(requestShow(title)),
  // requestQueue: (userId) => dispatch(requestQueue(userId)),
});

export default connect(msp, mdp)(PopularIndex);
