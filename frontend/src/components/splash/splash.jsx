import React from "react";
// import SearchBarContainer from '../searchbar/searchbar_container';
import PopularIndexContainer from "../popular/popular_index_container";

class Splash extends React.Component {
  render() {
    return (
      <div>
        {/* <SearchBarContainer /> */}
        <PopularIndexContainer />
      </div>
    );
  }
}

export default Splash;
