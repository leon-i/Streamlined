import { connect } from 'react-redux';
import { requestSearchResult, clearSearchResult, clearSearchErrors } from '../../actions/search_actions';
import { requestQueue } from '../../actions/queue_actions';
import SearchBar from './searchbar';

const mapStateToProps = ({ entities: { searchResults, queue }, session: { user }, errors: { search } }) => ({
    searchResults,
    queue,
    search,
    user
})

const mapDispatchToProps = dispatch => ({
    requestSearchResult: query => dispatch(requestSearchResult(query)),
    clearSearchResult: () => dispatch(clearSearchResult()),
    clearSearchErrors: () => dispatch(clearSearchErrors()),
    requestQueue: userId => dispatch(requestQueue(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);