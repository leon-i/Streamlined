import { connect } from 'react-redux';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    user: state.session.user,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    demo: () => dispatch(login({ email: "demo_user@gmail.com", password: "demo_user"})),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);