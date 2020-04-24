import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const QueueItem = ({ queueItem, providers }) => {
  debugger;
  // const logoRenders = providers.split(' ').map((provider, idx) => (
  //     <img key={idx} className='provider-logo-small' src={process.env.PUBLIC_URL + `/${provider}.png`} alt='stream-logo' />
  // ));

  const logoTest = (
    <img
      style={{ height: "50px" }}
      src={`https://image.tmdb.org/t/p/w300${queueItem.provider[0].logo_path}`}
      alt="stream-logo"
    />
  );

  return (
    <li className="queue-item flex">
      <FontAwesomeIcon icon={faTimes} />
      <img className="queue-item-img" src={queueItem.imageUrl}></img>
      <h2>{queueItem.title}</h2>
      <div className="queue-item-providers flex">{logoTest}</div>
    </li>
  );
};

export default QueueItem;
