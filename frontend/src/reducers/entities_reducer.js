import { combineReducers } from "redux";
import showsReducer from "./shows_reducer";
import queueReducer from "./queue_reducer";

const entitiesReducer = combineReducers({
  queue: queueReducer,
  shows: showsReducer,
});

export default entitiesReducer;
