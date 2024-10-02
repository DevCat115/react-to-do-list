import { ADD_TODO, DELETE_TODO, ENABLE_EDIT, SAVE_CHANGES } from "../types";

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
        data: state.data.filter((_, i) => {
          return i != action.payload;
        }),
      };
    case ENABLE_EDIT:
      return {
        ...state,
        data: state.data.map((v, i) =>
          i == action.payload
            ? {
                content: v.content,
                isEditing: true,
                check: v.check,
              }
            : v
        ),
      };
    case SAVE_CHANGES:
        return {
            ...state,
            data: state.data.map((v, i) => i == action.payload[0] ? {
                content: action.payload[1],
                isEditing: false,
                check: action.payload[2]
            }: v)
        }
    default:
      return state;
  }
};

export default todoReducer;
