import { combineReducers } from "redux";
import showsReducer from "./shows_reducer";
import queueReducer from "./queue_reducer";
import searchResultsReducer from "./search_results_reducer";

const entitiesReducer = combineReducers({
  queue: queueReducer,
  shows: showsReducer,
  searchResults: searchResultsReducer,
});

export default entitiesReducer;
