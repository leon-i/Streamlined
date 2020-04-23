import React from "react";

class AddToQueueButton extends React.Component {
  constructor(props) {
    super(props);
    this.addToQueue = this.addToQueue.bind(this);
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

  render() {
    if (!this.props.currentUser) return null;
    return (
      <div>
        <button onClick={this.addToQueue}>Add to queue</button>
      </div>
    );
  }
}

export default AddToQueueButton;
