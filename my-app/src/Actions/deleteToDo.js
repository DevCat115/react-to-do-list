import { DELETE_TODO } from "../types";

export const deleteToDo = (index) => ({
  type: DELETE_TODO,
  payload: index,
});
