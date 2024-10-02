import { ENABLE_EDIT } from "../types";

export const enableEdit = (index) => ({
  type: ENABLE_EDIT,
  payload: index,
});
