import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import products from './products';
import filterProducts from "./filterProducts";
import sortProducts from "./sortProducts";
import filteredProducts from "./filteredProducts";


export default (history) => combineReducers({
  router: connectRouter(history),
  products,
  filterProducts,
  sortProducts,
  filteredProducts
});