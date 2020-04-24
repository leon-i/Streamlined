import React from "react";

class AddToQueueButton extends React.Component {
  constructor(props) {
    super(props);
    this.addToQueue = this.addToQueue.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
  }

  addToQueue() {
    const { show } = this.props;
    this.props.addToQueue({
      title: show.name,
      description: show.overview,
      rating: show.vote_average,
      genres: show.genres,
      imageUrl: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
      provider: show.networks,
      user: this.props.currentUser.id,
    });
  }

  removeFromQueue() {
    this.props.removeFromQueue({
      title: this.props.show.name,
      user: this.props.currentUser.id,
    });
  }

  render() {
    if (!this.props.currentUser) return null;

    const { queue } = this.props;
    let added = false;

    queue.forEach((queueItem) => {
      if (queueItem.title === this.props.show.name) {
        added = true;
      }
    });

    const btnTxt = added ? "Remove from queue" : "Add to queue";
    const action = added ? this.removeFromQueue : this.addToQueue;
    return (
      <div>
        <button onClick={this.addToQueue}>{btnTxt}</button>
        <button onClick={action}>remove</button>
      </div>
    );
  }
}

export default AddToQueueButton;
