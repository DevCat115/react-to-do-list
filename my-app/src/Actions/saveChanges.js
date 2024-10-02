import { SAVE_CHANGES } from "../types";

export const saveChanges = (index, content, check) => ({
  type: SAVE_CHANGES,
  payload: [index, content, check],
});
