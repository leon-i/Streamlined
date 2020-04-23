import { connect } from "react-redux";
import AddToQueueButton from "./add_to_queue_button";
import { addToQueue } from "../../actions/queue_actions";

const msp = (state) => ({
  currentUserId: state.session.user.id,
});

const mdp = (dispatch) => ({
  addToQueue: (data) => dispatch(addToQueue(data)),
});

export default connect(msp, mdp)(AddToQueueButton);
