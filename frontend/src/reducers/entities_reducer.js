import { combineReducers } from "redux";
import showsReducer from "./shows_reducer";

const entitiesReducer = combineReducers({
  shows: showsReducer,
});

export default entitiesReducer;
