import { combineReducers } from "redux";
import configurationReducer from "./configurationReducer";
import layoutsReducer from "./layoutsReducer";

export default combineReducers({ configurationReducer, layoutsReducer });
