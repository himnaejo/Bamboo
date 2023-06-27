import { createStore, combineReducers } from "redux";
import userInfo from "../modules/userInfo";
import news from "../modules/news";

const rootReducer = combineReducers({
  userInfo,
  news
});
const store = createStore(rootReducer);

export default store;
