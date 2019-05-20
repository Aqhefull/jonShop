import React from 'react'
import { connect } from "react-redux";
import './style.sass'
import { Link } from "react-router-dom";
import Image from '../Image';
import Badge from '../Badge';
import Button from '../Button';

const SingleProduct = ({ products, match }) => {
  const { id: productID } = match.params;
  const { items } = products;
  const currentProduct = items.find(el => el.id === Number(productID));
  return currentProduct ? (
    <div className="single-product">
      <div className="single-product__container">
        <div className="single-product__left">
          <Image src={currentProduct.image} className="single-product__image" />
        </div>
        <div className="single-product__right">
          <div className="single-product__right-top">
            <h1 className="single-product__title">{currentProduct.text}</h1>
            <span className="single-product__price">
              Price: <strong>{currentProduct.price}$</strong>
            </span>
            <span className="single-product__vendor">
              Vendor: <strong>{currentProduct.vendor}</strong>
            </span>
            <div className="single-product__sizes">
              <span>Sizes: </span>
              <ul>
                {currentProduct.size.map((size, i) => (
                  <li key={i}><Badge value={size} inline className="single-product__size"/></li>
                ))}
              </ul>
            </div>
            <div className="single-product__addtocart">
              <Button value="Buy now!"/>
            </div>
          </div>
          <div className="single-product__right-bottom">
            <Link to={`/`}>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    "404"
  );
};

export default connect(({ products, router }) => ({
  products,
  router
}))(SingleProduct);