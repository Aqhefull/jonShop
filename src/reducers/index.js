import { combineReducers } from 'redux';
import products from './products';
import filterProducts from "./filterProducts";
import sortProducts from "./sortProducts";
import filteredProducts from "./filteredProducts";


const rootReducer = combineReducers({
  products,
  filterProducts,
  sortProducts,
  filteredProducts
});

export default rootReducer;
