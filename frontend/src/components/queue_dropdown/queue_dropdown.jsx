import React from "react";
import QueueItem from "./queue_item";
import QueueCalculatorContainer from "./queue_calculator_container";
import "../../stylesheets/queue_dropdown.css";

// const calculateStartingCost = (providers) => {
//     let cost = 0;
//     if (providers.includes('Netflix')) cost += 13;
//     if (providers.includes('Hulu')) cost += 6;
//     if (providers.includes('HBO')) cost += 15;
//     if (providers.includes('AmazonPrimeVideo')) cost += 9;
//     return cost;
// }

const QueueDropdown = React.forwardRef(({ currentUser, showQueue, queue }, ref) => {
  if (!currentUser) return null;
  const dropdownName = showQueue
    ? "queue-dropdown-show flex"
    : "queue-dropdown-hide";
  const queueItems = queue.map(queueItem => (
      <QueueItem queueItem={queueItem} />
  ))
  return (
    <div className={dropdownName} ref={ref}>
      <h2>{`${currentUser.username}'s Queue`}</h2>
      <section className="queue-list-container">
        <ul className="queue-list flex">
          {queueItems}
          {/* <QueueItem providers="Netflix Hulu HBO AmazonPrimeVideo" />
          <QueueItem providers="Netflix Hulu" />
          <QueueItem providers="Netflix AmazonPrimeVideo" />
          <QueueItem providers="Netflix Hulu HBO" /> */}
        </ul>
      </section>
      <button className="clear-queue-btn">CLEAR QUEUE</button>
      <QueueCalculatorContainer providers={["Netflix", "Hulu"]} />
    </div>
  );
});

export default QueueDropdown;
