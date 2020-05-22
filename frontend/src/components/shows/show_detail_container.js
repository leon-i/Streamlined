import { connect } from "react-redux";
import { requestShow } from "../../actions/show_actions";
import { requestSearchResult, clearSearchResult, clearSearchErrors } from '../../actions/search_actions';
import ShowDetail from "./show_detail";

const msp = (state, ownProps) => {
    return {
      show: state.entities.shows.detail,
      searchResults: state.entities.searchResults
    //   title: ownProps.match.params,
    };
};
const mdp = (dispatch) => ({
  requestShow: (title) => dispatch(requestShow(title)),
  requestSearchResult: query => dispatch(requestSearchResult(query)),
  clearSearchResult: () => dispatch(clearSearchResult()),
  clearSearchErrors: () => dispatch(clearSearchErrors())
});

export default connect(msp, mdp)(ShowDetail);
