import { connect } from "react-redux";
import QueueShow from "./queue_show";
import { requestShow, requestLikedShows } from "../../actions/show_actions";

const msp = (state) => {
  return {
    likedShows: state.entities.shows.liked,
    currentUserId: state.session.user.id,
  };
};

const mdp = (dispatch) => ({
  requestShow: (title) => dispatch(requestShow(title)), //iterate through the queue to fetch provider info
  requestLikedShows: (userId) => dispatch(requestLikedShows(userId)),
});
// requestProvider
//
export default connect(msp, mdp)(QueueShow);
