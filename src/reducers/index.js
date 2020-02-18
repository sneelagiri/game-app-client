import { combineReducers } from "redux";
import user from "./user";
import lobby from "./lobby";
// import events from "./events";

export default combineReducers({ user, lobby });
