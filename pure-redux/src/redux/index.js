import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import counterReducer from "./reducers/counterReducer";

const reducer = combineReducers({
  todoReducer,
  counterReducer,
});

const store = createStore(reducer);

export default store;
