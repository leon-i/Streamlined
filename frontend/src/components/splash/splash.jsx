import React from "react";
import SearchBarContainer from "../searchbar/searchbar_container";
import PopularIndexContainer from "../popular/popular_index_container";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  render() {
    return (
      <div>
        <Link to="/myqueue">my queque</Link>
        <div className="splash">
          <h1 className="app-name">Streamlined.</h1>
          <SearchBarContainer />
        </div>
        <PopularIndexContainer />
      </div>
    );
  }
}

export default Splash;
