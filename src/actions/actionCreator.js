import { FILTER_PRODUCT } from "../constants";

export const switchFilter = (name, itemSlug) => ({
  type: FILTER_PRODUCT,
  payload: name,
  itemSlug
});
