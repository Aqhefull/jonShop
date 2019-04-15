import { ADD_LISTCOUNT } from "../constants";

export const addListCount = (name, count) => ({
  type: ADD_LISTCOUNT,
  name,
  count
});
