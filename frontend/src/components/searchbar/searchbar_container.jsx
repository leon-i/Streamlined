import { connect } from 'react-redux';
import { requestSearchResult, clearSearchResult } from '../../actions/search_actions';
import SearchBar from './searchbar';

const mapStateToProps = ({ searchResults }) => ({
    searchResults
})

const mapDispatchToProps = dispatch => ({
    requestSearchResult: query => dispatch(requestSearchResult(query)),
    clearSearchResult: () => dispatch(clearSearchResult())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);