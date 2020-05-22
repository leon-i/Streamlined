import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  // Once the user has been authenticated, redirect to the Splash page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderError(field) {
    const currentProps = Object.assign({}, this.props);
    const { errors } = currentProps;
    if (errors[field]) {
      if (field === 'password') {
        const temp = errors.password.split(' ');
        temp[0] = 'Password';
        errors.password = temp.join(' ');
      }

      return (
        <p className='error'>
          {errors[field]}
        </p>
      )
    } else {
      return (
        <p className='error-hidden'></p>
      )
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <p className="user-auth-logo">Streamlined.</p>
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            { this.renderError('email') }
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            { this.renderError('password') }
            <section className='session-form-btns flex'>
              <input className="auth-submit" type="submit" value="Log In" />
                <button onClick={(e) => {
                  e.preventDefault();
                  this.props.demo();
                }} className='demo-user'>
                  Demo User
                </button>
              </section>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);