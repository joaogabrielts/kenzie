import { ADD_COMMENT } from "./actionsTypes";

export const addComment = (updatedUser) => ({
  type: ADD_COMMENT,
  updatedUser,
});
