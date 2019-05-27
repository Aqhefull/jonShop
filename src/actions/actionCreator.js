import {
  UPDATE_CART,
  SORT_PRODUCT,
  FILTERED_PRODUCTS,
  FILTER_PRODUCT
} from "../constants";

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

export const addToCart = (id) => ({
  type: UPDATE_CART,
  id
});