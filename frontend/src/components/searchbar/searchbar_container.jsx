import { connect } from 'react-redux';
import { requestSearchResult, clearSearchResult, clearSearchErrors } from '../../actions/search_actions';
import SearchBar from './searchbar';

const mapStateToProps = ({ searchResults, errors: { search } }) => ({
    searchResults,
    search
})

const mapDispatchToProps = dispatch => ({
    requestSearchResult: query => dispatch(requestSearchResult(query)),
    clearSearchResult: () => dispatch(clearSearchResult()),
    clearSearchErrors: () => dispatch(clearSearchErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);