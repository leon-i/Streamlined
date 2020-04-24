import { connect } from 'react-redux';
import { requestSearchResult, clearSearchResult, clearSearchErrors } from '../../actions/search_actions';
import { requestQueue, addToQueue } from '../../actions/queue_actions';
import SearchBar from './searchbar';

const mapStateToProps = ({ entities: { searchResults }, session: { user }, errors: { search } }) => ({
    searchResults,
    search,
    user
})

const mapDispatchToProps = dispatch => ({
    requestSearchResult: query => dispatch(requestSearchResult(query)),
    clearSearchResult: () => dispatch(clearSearchResult()),
    clearSearchErrors: () => dispatch(clearSearchErrors()),
    requestQueue: userId => dispatch(requestQueue(userId)),
    addToQueue: data => dispatch(addToQueue(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);