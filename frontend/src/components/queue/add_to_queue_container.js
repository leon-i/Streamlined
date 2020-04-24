import { connect } from "react-redux";
import AddToQueueButton from "./add_to_queue_button";
import { addToQueue, removeFromQueue } from "../../actions/queue_actions";

const msp = (state) => ({
  currentUser: state.session.user,
  queue: state.entities.queue,
});

const mdp = (dispatch) => ({
  addToQueue: (data) => dispatch(addToQueue(data)),
  removeFromQueue: (data) => dispatch(removeFromQueue(data)),
});

export default connect(msp, mdp)(AddToQueueButton);
