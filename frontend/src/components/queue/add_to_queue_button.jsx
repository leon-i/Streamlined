import React from "react";

class AddToQueueButton extends React.Component {
  constructor(props) {
    super(props);
    this.addToQueue = this.addToQueue.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
  }

  addToQueue() {
    const { show } = this.props;
    const provider = show.providers ? show.providers : show.networks[0].name;
    const imageUrl = show.imageUrl
      ? show.imageUrl
      : `https://image.tmdb.org/t/p/w500${show.backdrop_path}`;
    debugger;
    this.props.addToQueue({
      title: show.name,
      description: show.overview,
      // rating: show.vote_average,
      // genres: show.genres,
      imageUrl: imageUrl,
      // provider: show.networks,
      provider: provider,
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
    // debugger;
    if (
      !this.props.currentUser ||
      Object.keys(this.props.currentUser).length === 0
    ) {
      return null;
    }

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
        <button className="queue-btn" onClick={action}>
          {btnTxt}
        </button>
      </div>
    );
  }
}

export default AddToQueueButton;
