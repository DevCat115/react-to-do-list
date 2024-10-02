import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers/index";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware() +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
