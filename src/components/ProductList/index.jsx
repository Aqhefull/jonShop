import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ProductItem from '../ProductItem';

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

const ProductList = ({ productList, filterProducts }) => (
    <TransitionGroup className="product-list">
        {filterList(productList, filterProducts).map(
          ({ id, image, text, price }) => (
            <CSSTransition
                key={id}
                timeout={500}
                classNames="fadelist"
              >
              <ProductItem id={id}>
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

export default ProductList;
