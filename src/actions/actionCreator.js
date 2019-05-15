import { FILTER_PRODUCT, SORT_PRODUCT } from "../constants";

export const switchFilter = (name, itemSlug) => ({
  type: FILTER_PRODUCT,
  payload: name,
  itemSlug
});


export const switchSortProducts = (sortBy) => ({
  type: SORT_PRODUCT,
  sortBy
});