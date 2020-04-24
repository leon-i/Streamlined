import { combineReducers } from "redux";
import showsReducer from "./shows_reducer";
import searchResultsReducer from "./search_results_reducer";

const entitiesReducer = combineReducers({
  shows: showsReducer,
  searchResults: searchResultsReducer,
});

export default entitiesReducer;
