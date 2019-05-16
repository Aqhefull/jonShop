import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ProductItem from '../ProductItem';
import { getFilteredProducts } from "../../actions/actionCreator";

import './style.sass';

const filterList = (productList, filterProducts) => {
  let tempArr = productList;
  for (let key in filterProducts) {
    if (filterProducts.hasOwnProperty(key)) {
      tempArr = tempArr.filter((pl) => {
        if(typeof filterProducts[key] === "object" || filterProducts[key] instanceof Array) {
          if (pl[key].some(r => filterProducts[key].includes('all') || filterProducts[key].includes(r))) {
            return pl;
          }
        }
        if(typeof filterProducts[key] === "string" || filterProducts[key] instanceof String) {
           if (filterProducts[key] === 'all' || filterProducts[key] === pl[key]){
            return pl;
          }
        }
      })
    }
  }
  return tempArr;
}
const sortList = (list, sortBy, getFilteredProducts) => {
  getFilteredProducts(list);
  switch (sortBy) {
    case "new":
      return list;
    case "price_up":
      return list.sort(function(a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    case "price_down":
      return list.sort(function(a, b) {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    default:
      return list;
  }
};
const ProductList = ({ productList, filterProducts, sortBy, getFilteredProducts }) => (
    <TransitionGroup className="product-list">
        {sortList(filterList(productList, filterProducts), sortBy, getFilteredProducts).map(
          ({ id, image, text, price }) => (
            <CSSTransition
                key={id}
                timeout={500}
                classNames="fadelist"
              >
              <ProductItem id={id} linkText={text}>
                <img src={image} alt={text} />
                <div className="product-item__info">
                  <div className="product-item__title">
                    <span>{text}</span>
                  </div>
                  <div className="product-item__price">
                    <span>{price}$</span>
                  </div>
                </div>
              </ProductItem>
            </CSSTransition>
          )
        )}
    </TransitionGroup>
);

ProductList.propTypes = {
  productList: PropTypes.array,
  filterProducts: PropTypes.object
};

ProductList.defaultProps = {
  productList: [],
  filterProducts: {}
};
export default connect(
  ({ getFilteredProducts }) => ({ getFilteredProducts }),
  { getFilteredProducts }
)(ProductList);
