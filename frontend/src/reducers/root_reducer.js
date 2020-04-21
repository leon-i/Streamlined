import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import searchResultsReducer from './search_results_reducer';
import errorsReducer from './errors/errors_reducer';
import showsReducer from './shows_reducer';
showsReducer

export default combineReducers({
  session: sessionReducer,
  searchResults: searchResultsReducer,
  errors: errorsReducer,
  shows: showsReducer,
});