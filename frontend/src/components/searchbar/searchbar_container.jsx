import { connect } from 'react-redux';
import { requestSearchResult } from '../../actions/search_actions';
import SearchBar from './searchbar';

const mapDispatchToProps = dispatch => ({
    requestSearchResult: query => dispatch(requestSearchResult(query))
});

export default connect(null, mapDispatchToProps)(SearchBar);