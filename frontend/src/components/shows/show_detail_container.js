import { connect } from "react-redux";
import { requestShow } from "../../actions/show_actions";
import ShowDetail from "./show_detail";

const msp = (state, ownProps) => {
    return {
      show: state.entities.shows.detail,
    //   title: ownProps.match.params,
    };
};
const mdp = (dispatch) => ({
  requestShow: (title) => dispatch(requestShow(title)),
});

export default connect(msp, mdp)(ShowDetail);
