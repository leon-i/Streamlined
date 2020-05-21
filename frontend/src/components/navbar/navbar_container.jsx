import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearSearchResult } from '../../actions/search_actions';
import { deleteFromQueue, emptyQueue } from '../../actions/queue_actions';

import NavBar from './navbar';

const mapStateToProps = ({ session, entities: { queue }}) => ({
  loggedIn: session.isAuthenticated,
  currentUser: session.user,
  queue
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearSearchResult: () => dispatch(clearSearchResult()),
  deleteFromQueue: data => dispatch(deleteFromQueue(data)),
  emptyQueue: userId => dispatch(emptyQueue(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);