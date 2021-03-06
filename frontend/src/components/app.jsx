import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_api_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./navbar/navbar_container";
import Sidebar from './sidebar/sidebar';

import Splash from "./splash/splash";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ShowDetailContainer from '../components/shows/show_detail_container'

import '../stylesheets/app.css';

const App = () => (
  <div className='main-content'>
    <NavBarContainer />
    <Sidebar />
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/show/:title" component={ShowDetailContainer}/>

      {/* CHANGE /profile COMPONENT LATER. I DID THIS FOR TESTING PURPOSES  */}
      <ProtectedRoute exact path="/profile" component={ShowDetailContainer} />

    </Switch>
  </div>
);

export default App;
