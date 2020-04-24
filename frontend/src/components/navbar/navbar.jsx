import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
import QueueDropdown from "../queue_dropdown/queue_dropdown";
import "../../stylesheets/navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };

    this.dropdownRef = React.createRef();
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleOutsideDropdownClick = this.handleOutsideDropdownClick.bind(
      this
    );
  }

  componentDidMount() {
    const { currentUser, requestQueue } = this.props;
    // debugger
    requestQueue(currentUser.id);
    document.addEventListener("click", this.handleOutsideDropdownClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideDropdownClick);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
          <QueueDropdown
            queue={this.props.queue}
            currentUser={this.props.currentUser}
            showQueue={this.state.showDropdown}
            ref={this.dropdownRef}
          />
          <div className="session-btns">
            {/* <Link to={'/profile'}>Profile</Link> */}
            <button
              className="open-queue-btn"
              onClick={this.handleDropdownClick}
            >
              Queue
            </button>
            <button className="logout-btn" onClick={this.logoutUser}>
              Logout
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div className="session-btns">
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  handleDropdownClick(e) {
    this.setState({ showDropdown: true });
  }

  handleOutsideDropdownClick(e) {
    const current = this.dropdownRef.current;
    const outside = current
      ? current.contains(e.target) || e.target.className === "open-queue-btn"
        ? false
        : true
      : false;
    if (outside) this.setState({ showDropdown: false });
  }

  render() {
    // debugger;
    return (
      <nav className="navbar flex">
        <Link to={"/"}>
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/Streamlined_Logo.svg"}
            alt="stream-logo"
            onClick={() => this.props.clearSearchResult()}
          />
        </Link>
        <div className="navbar-right">{this.getLinks()}</div>
      </nav>
    );
  }
}

export default NavBar;
