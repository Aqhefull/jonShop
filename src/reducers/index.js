import { combineReducers } from 'redux';
import products from './products.js';
import filterProducts from "./filterProducts.js";
import sortProducts from "./sortProducts.js";


const rootReducer = combineReducers({ products, filterProducts, sortProducts });

export default rootReducer;
