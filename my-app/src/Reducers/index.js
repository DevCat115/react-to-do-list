// redux/reducers.js
import { combineReducers } from 'redux';
import todoReducer from './todoReducer'; // Assuming you create a separate file for the todo reducer

const rootReducer = combineReducers({
    todos: todoReducer,
    // other reducers can go here
});

export default rootReducer;