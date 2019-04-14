import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from '../ProductItem';

import './style.sass';

const ProductList = ({ productList }) => (
  <ul className="product-list">
    {productList.map(({ id, image, text, price }) => (
      <ProductItem id={id} key={id}>
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
    ))}
  </ul>
);

ProductList.propTypes = {
  productList: PropTypes.array
}

ProductList.defaultProps = {
  productList: []
}

export default ProductList;
