import React from "react";
// import SearchBarContainer from '../searchbar/searchbar_container';

class Splash extends React.Component {
  componentDidMount() {
    this.props.requestPopular();
  }

  render() {
    if (!this.props.popular) return null;
    const popularList = this.props.popular.map((show) => {
      debugger;
      return (
        <li key={show.id}>
          <div>{show.name}</div>
          <div>{show.vote_average}</div>
          <div>{show.popularity}</div>
          <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} />
        </li>
      );
    });
    // debugger;
    return (
      <div>
        <h1>Splash Page</h1>
        {/* <SearchBarContainer /> */}
        <h1>test for popular</h1>
        <ol>{popularList}</ol>
      </div>
    );
  }
}

export default Splash;
