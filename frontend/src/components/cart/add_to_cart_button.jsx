import React from "react";

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    // console.log(this.props.title);
    this.props.addToCart({'title': this.props.title, 'userId': this.props.currentUserId});
    // this.props.addToCart(this.props.currentUserId, this.props.title);
  }

  render() {
    return (
      <div>
        <button onClick={this.addToCart}>Like</button>
      </div>
    );
  }
}

export default AddToCartButton;
