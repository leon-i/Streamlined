import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearSearchResult } from '../../actions/search_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearSearchResult: () => dispatch(clearSearchResult())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);