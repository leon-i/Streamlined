import { connect } from "react-redux";
import { requestQueue } from "../../actions/queue_actions";

import QueueCalculator from "./queue_calculator";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  queue: state.entities.queue,
});

const mapDispatchToProps = (dispatch) => ({
  requestQueue: (userId) => dispatch(requestQueue(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QueueCalculator);
