import React from 'react';
import SearchBarContainer from '../searchbar/searchbar_container';

class Splash extends React.Component {

  render() {
    return (
      <div>
          <h1>Splash Page</h1>
          <SearchBarContainer />
      </div>
    );
  }
}

export default Splash;