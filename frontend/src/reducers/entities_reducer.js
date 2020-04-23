import { combineReducers } from "redux";
import showsReducer from "./shows_reducer";
import queuesReducer from './queues_reducer';


const entitiesReducer = combineReducers({

  queues: queuesReducer,
  shows: showsReducer,
});

export default entitiesReducer;
