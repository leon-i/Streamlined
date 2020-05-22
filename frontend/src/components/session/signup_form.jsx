import React from 'react';
import { withRouter } from 'react-router-dom';
import "../../stylesheets/signup.css"

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // componentWillReceiveProps(nextProps) {
  //   // if (nextProps.signedIn === true) {
  //   //   this.props.history.push('/');
  //   // }

  //   this.setState({errors: nextProps.errors})
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.signup(user, () => this.props.history.push('/'))

  }

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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <p className="user-auth-logo">Streamlined.</p>
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              { this.renderError('email') }
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
              { this.renderError('username') }
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              { this.renderError('password') }
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
              { this.renderError('password2') }
              <section className='session-form-btns flex'>
                <input className="auth-submit" type="submit" value="Sign Up" />
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

export default withRouter(SignupForm);