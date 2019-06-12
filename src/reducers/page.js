import { UPDATE_PAGE } from "../constants";
import PRODUCTS from '../data'

const initialState = {
  fromProduct: 1,
  untilProduct: PRODUCTS.items.length / 2,
  currentPage: 1,
  productsPerPage: 6
};
const currentPage = (state = initialState, { type, page }) => {
  switch (type) {
    case UPDATE_PAGE:
      return {
        fromProduct: (page * state.productsPerPage - state.productsPerPage) + 1,
        untilProduct: page * state.productsPerPage,
        currentPage: page,
        productsPerPage: 6
      };
    default:
      return state;
  }
};

export default currentPage;
