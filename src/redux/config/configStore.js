import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userInfo from "../modules/userInfo";
import modalStatus from "../modules/modalStatus";

const rootReducer = combineReducers({ userInfo, modalStatus });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
