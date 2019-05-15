import { FILTER_PRODUCT, SORT_PRODUCT, FILTERED_PRODUCTS } from "../constants";

export const switchFilter = (name, itemSlug) => ({
  type: FILTER_PRODUCT,
  payload: name,
  itemSlug
});


export const switchSortProducts = (sortBy) => ({
  type: SORT_PRODUCT,
  sortBy
});

export const getFilteredProducts = (prodArr) => ({
  type: FILTERED_PRODUCTS,
  prodArr
});