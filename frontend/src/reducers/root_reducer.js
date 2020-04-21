import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import searchResultsReducer from "./search_results_reducer";
import errorsReducer from "./errors/errors_reducer";
import entitiesReducer from "./entities_reducer";

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  searchResults: searchResultsReducer,
  errors: errorsReducer,
});
