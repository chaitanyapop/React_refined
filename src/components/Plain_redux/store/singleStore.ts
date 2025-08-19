import counterReducer from "../reducers/counterReducer";
import todoReducer from "../reducers/todoReducer";
import { createStore } from "redux";
import { combineReducers } from "redux";

let reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

let store = createStore(reducer);
export default store;
