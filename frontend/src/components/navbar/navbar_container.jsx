import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { clearSearchResult } from "../../actions/search_actions";
import { requestQueue } from "../../actions/queue_actions";
import { removeFromQueue } from "../../actions/queue_actions";

import NavBar from "./navbar";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
  queue: state.entities.queue,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearSearchResult: () => dispatch(clearSearchResult()),
  requestQueue: (userId) => dispatch(requestQueue(userId)),
  removeFromQueue: (data) => dispatch(removeFromQueue(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
