import { combineReducers } from "redux";
import showsReducer from "./shows_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
  users: usersReducer,
  shows: showsReducer,
});

export default entitiesReducer;
