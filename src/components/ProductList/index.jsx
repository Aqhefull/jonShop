import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ProductItem from "../ProductItem";
import Button from "./../Button";
import CartIcon from "../../img/cart.svg";
import NotCheckIcon from "../../img/off.svg";
import { Link } from "react-router-dom";

import { getFilteredProducts, addToCart } from "../../actions/actionCreator";

import "./style.sass";

const filterList = (productList, filterProducts) => {
  let tempArr = productList;
  for (let key in filterProducts) {
    if (filterProducts.hasOwnProperty(key)) {
      tempArr = tempArr.filter(pl => {
        if (
          typeof filterProducts[key] === "object" ||
          filterProducts[key] instanceof Array
        ) {
          if (
            pl[key].some(
              r =>
                filterProducts[key].includes("all") ||
                filterProducts[key].includes(r)
            )
          ) {
            return pl;
          }
        }
        if (
          typeof filterProducts[key] === "string" ||
          filterProducts[key] instanceof String
        ) {
          if (
            filterProducts[key] === "all" ||
            filterProducts[key] === pl[key]
          ) {
            return pl;
          }
        }
        return false;
      });
    }
  }
  return tempArr;
};
const sortByPhrase = (list, searchProduct) =>
  list.filter(({ text }) => {
    return text.toUpperCase().indexOf(searchProduct.toUpperCase()) > -1;
  });
const sortList = (list, sortBy, getFilteredProducts, searchProduct) => {
  const filteredList = sortByPhrase(list, searchProduct);
  getFilteredProducts(filteredList);
  switch (sortBy) {
    case "new":
      return filteredList;
    case "price_up":
      return filteredList.sort(function(a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    case "price_down":
      return filteredList.sort(function(a, b) {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    default:
      return filteredList;
  }
};
const ProductList = ({
  productList,
  filterProducts,
  sortBy,
  getFilteredProducts,
  inCart,
  addToCart,
  searchProduct
}) => {
  const frontendProdList = sortList(
    filterList(productList, filterProducts),
    sortBy,
    getFilteredProducts,
    searchProduct
  );
  return frontendProdList.length > 0 ? (
    <TransitionGroup className="product-list">
      {frontendProdList.map(({ id, image, text, price }) => (
        <CSSTransition key={id} timeout={500} classNames="fadelist">
          <ProductItem id={id}>
            <div className="product-item__top">
              <Link to={`/product/${id}`}>
                <img src={image} alt={text} />
              </Link>
            </div>
            <div className="product-item__bottom">
              <div className="product-item__info">
                <div className="product-item__title">
                  <Link to={`/product/${id}`}>
                    <span>{text}</span>
                  </Link>
                </div>
                <div className="product-item__price">
                  <span>{price}$</span>
                </div>
              </div>
              <div className="product-item__cart">
                <Button
                  color={inCart.includes(id) ? "green" : ""}
                  value={inCart.includes(id) ? "In Cart" : "Buy now!"}
                  buttonClick={() => addToCart(id)}
                  image={!inCart.includes(id) ? CartIcon : NotCheckIcon}
                />
              </div>
            </div>
          </ProductItem>
        </CSSTransition>
      ))}
    </TransitionGroup>
  ) : (
    <TransitionGroup className="product-list">
      <CSSTransition timeout={500} classNames="fadelist">
        <div className="product-not-found">
          <h2>Sorry, no product found :(</h2>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

ProductList.propTypes = {
  productList: PropTypes.array,
  filterProducts: PropTypes.object
};

ProductList.defaultProps = {
  productList: [],
  filterProducts: {}
};
export default connect(
  ({ getFilteredProducts, inCart, searchProduct }) => ({
    getFilteredProducts,
    inCart,
    searchProduct
  }),
  { getFilteredProducts, addToCart }
)(ProductList);
