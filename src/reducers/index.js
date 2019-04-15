import { combineReducers } from 'redux';
import products from './products.js';
import filterProducts from "./filterProducts.js";

const rootReducer = combineReducers({ products, filterProducts });

export default rootReducer;
