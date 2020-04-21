import React from 'react';
import SearchBarContainer from '../searchbar/searchbar_container';

class Splash extends React.Component {

  render() {
    return (
      <div className='splash'>
          <h1>Streamlined.</h1>
          <SearchBarContainer />
      </div>
    );
  }
}

export default Splash;