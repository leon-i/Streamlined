import React from "react";
import AddToQueueContainer from "../queue/add_to_queue_container";
import "../../stylesheets/show-page.css";

class ShowDetail extends React.Component {
  componentDidMount() {
    this.props.requestShow(this.props.match.params.title);
  }

  render() {
    const { show } = this.props;

    if (!show) return null;
    const {
      name,
      networks,
      vote_average,
      backdrop_path,
      poster_path,
      overview,
      vote_count,
      seasons,
    } = show;

    return (
      <div className="show-page">
        <AddToQueueContainer show={show} />
        <img
          className="backdrop"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        />
        <div className="information">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />

          <div className="text">
            <h1 className="name">{name}</h1>

            <div>{overview}</div>
            <div>{`${seasons.length} Seasons`}</div>
            <div>{networks[0].name}</div>

            <div>Rating: {vote_average}</div>
            <div>Votings: {vote_count}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDetail;
