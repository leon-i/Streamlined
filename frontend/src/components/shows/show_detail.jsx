import React from "react";

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
      <div>
        <h1>{name}</h1>
        <div></div>
        <div>{networks[0].name}</div>

        <div>Rating: {vote_average}</div>
        <div>Votings: {vote_count}</div>
        <div>{`${seasons.length} Seasons`}</div>
        <div>{overview}</div>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      </div>
    );
  }
}

export default ShowDetail;
