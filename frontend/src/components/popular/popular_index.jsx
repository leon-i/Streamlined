import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/popular-shows.css";

// movieDBUrl: "https://api.themoviedb.org/3/",
// movieDVImgUrl: "https://image.tmdb.org/t/p",

class PopularIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: "",
  //   };
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // update(field) {
  //   return (e) => this.setState({ [field]: e.target.value });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const title = this.state.title;
  //   debugger;
  //   this.props.requestShow(title);
  // }

  componentDidMount() {
    this.props.requestPopular();
  }

  render() {
    if (!this.props.shows.popular.length) return null;
    // debugger;
    const popularList = this.props.shows.popular.map((show) => {
      // debugger;
      return (
        <li key={show.id}>
          <div>
            <Link to={`/show/${show.name}`}>
              <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} />
            </Link>
          </div>

          <div className="show-info">
            <div className="pop-title">
              <Link to={`/show/${show.name}`}>{show.name}</Link>
            </div>
            <div className="pop-rating">{show.vote_average}</div>
            <div className="pop-count">Ratings: {show.vote_count} </div>
            <div className="pop-pop">{Math.floor(show.popularity)}</div>
          </div>
        </li>
      );
    });

    return (
      <div className="populars">
        {/* <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update("title")} />
          <input type="submit" value="search" />
        </form> */}
        <h1>Popular</h1>
        <ol className="Popular-list">{popularList}</ol>
      </div>
    );
  }
}

export default PopularIndex;
