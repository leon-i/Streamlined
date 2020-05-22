import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import QueueButton from '../search_results/queue_button';
import "../../stylesheets/show-page.css"

class ShowDetail extends React.Component {
  componentDidMount() {
    const { match, requestShow, requestSearchResult, clearSearchResult } = this.props;
    clearSearchResult();
    requestShow(match.params.title);
    requestSearchResult({ mediaType: 'Show', title: match.params.title });
  }

  render() {
    const { show, searchResults } = this.props;
    const searchResult = Object.values(searchResults)[0];

    if (!show) return null;
    if (!searchResult) return (
      <FontAwesomeIcon className='loading-icon show-loading' icon={faSpinner} spin />
    );

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

    const providersRender = searchResult.providers.map((provider, idx) => (
      <li key={idx}>
          <a href={`https://${provider}.com`}>
              <img className='provider-logo' src={process.env.PUBLIC_URL + `/${provider}.png`} alt='stream-logo' /> 
          </a>
      </li>
    ));

    return (
      <>
      <div className="show-page">
        <img className="backdrop" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />

        <div className="information">
          <img className="poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />

          <div className="text">
            <h1 className="name">{name}</h1>

            <div>{overview}</div>
            <div>{`${seasons.length} Seasons`}</div>
            <div>{networks[0].name}</div>

            <div>Rating: {vote_average}</div>
            <div>Votings: {vote_count}</div>
            <ul>
              { providersRender }
            </ul>
          </div>
        </div>
          <div className='show-queue-btn-container'>
            <QueueButton />
          </div>
      </div>
      </>
    );
  }
}

export default ShowDetail;
