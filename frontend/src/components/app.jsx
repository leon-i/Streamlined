import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';

import Splash from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import '../stylesheets/app.css';

const App = () => (
  <div className='main-content'>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;