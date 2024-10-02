import { ADD_TODO, DELETE_TODO } from "../types";

const initialState = {
  data: [],
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        data: state.data.filter((_, i) => {return i != action.payload }),
      };
    default:
      return state;
  }
};

export default todoReducer;
