import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_api_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./navbar/navbar_container";

import Splash from "./splash/splash";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ShowDetailContainer from "./shows/show_detail_container";
import QueueShowContainer from './cart/queue_show_container';

import "../stylesheets/app.css";

const App = () => (
  <div className="main-content">
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={Splash} />
      {/* <AuthRoute exact path="/" component={SplashContainer} /> */}
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/show/:title" component={ShowDetailContainer} />
      <Route exact path="/myqueue" component={QueueShowContainer} />
    </Switch>
  </div>
);

export default App;
