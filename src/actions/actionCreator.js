import {
  UPDATE_CART,
  SORT_PRODUCT,
  FILTERED_PRODUCTS,
  FILTER_PRODUCT,
  SEARCH_UPDATE,
  UPDATE_PAGE
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

export const searchByPhrase = (searchPhrase) => ({
  type: SEARCH_UPDATE,
  searchPhrase
});

export const changePage = (page) => ({
  type: UPDATE_PAGE,
  page
});