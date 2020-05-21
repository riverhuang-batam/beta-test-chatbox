import { combineReducers } from "redux";

import chatReducer from "../reducers/ChatReducer";
import mainReducer from "./MainReducer";
import login from "./LoginReducer";

const combineReducer = combineReducers({
  chatReducer,
  mainReducer,
  login,
});

export default combineReducer;
