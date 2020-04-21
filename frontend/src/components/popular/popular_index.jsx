import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import KEYS from "";

//todo replace keys

// movieDBUrl: "https://api.themoviedb.org/3/",
// movieDVImgUrl: "https://image.tmdb.org/t/p",

class PopularIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.requestPopular();
  }
  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title;
    debugger;
    this.props.requestShow(title);
  }

  render() {
    if (!this.props.shows.popular.length) return null;
    debugger;
    const popularList = this.props.shows.popular.map((show) => {
      // debugger;
      return (
        <li key={show.id}>
          <div>
            <Link to={`/show/${show.name}`}>{show.name}</Link>
          </div>
          <div>{show.vote_average}</div>
          <div>{show.popularity}</div>
          <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} />
        </li>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update("title")} />
          <input type="submit" value="search" />
        </form>
        <h1>Popular</h1>
        <ol>{popularList}</ol>
      </div>
    );
  }
}

export default PopularIndex;
