import React from "react";
import QueueItems from "./queue_items";

class QueueShow extends React.Component {
  componentDidMount() {
    this.props.requestLikedShows(this.props.currentUserId);
  }
  render() {
    const { likedShows } = this.props;
    // debugger
    if (!likedShows.length) return null;

    const queue = likedShows.map((show, idx) => (
      <li key={idx}><QueueItems title={show.title} /></li>
      
      // <li key={idx}>{show.title}</li>
    ));

    return (
      <div>
        {/* <Icon type="shopping-cart" /> */}
        <h1>this is the queue</h1>
        <ul>{queue}</ul>
        {/* {this.props.likedShows.length} */}
      </div>
    );
  }
}

export default QueueShow;
