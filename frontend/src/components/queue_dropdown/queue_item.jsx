import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const QueueItem = ({ queueItem, removeFromQueue, currentUser }) => {
  debugger;
  const logoRenders = queueItem.provider.map((provider, idx) => (
    <img
      key={idx}
      className="provider-logo-small"
      src={process.env.PUBLIC_URL + `/${provider}.png`}
      alt="stream-logo"
    />
  ));

  // const logoTest = (
  //   <img
  //     style={{ height: "50px" }}
  //     src={`https://image.tmdb.org/t/p/w300${queueItem.provider[0].logo_path}`}
  //     alt="stream-logo"
  //   />
  // );
  const removeFromQueue1 = () => {
    removeFromQueue({
      title: queueItem.title,
      user: currentUser.id,
    });
  };
  return (
    <li className="queue-item flex">
      <span onClick={removeFromQueue1}>
        <FontAwesomeIcon icon={faTimes} />
      </span>

      <img className="queue-item-img" src={queueItem.imageUrl}></img>
      <h2>{queueItem.title}</h2>
      {/* <div className="queue-item-providers flex">{logoTest}</div> */}
      <div className="queue-item-providers flex">{logoRenders}</div>
    </li>
  );
};

export default QueueItem;
