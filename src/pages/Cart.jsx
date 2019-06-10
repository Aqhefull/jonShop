import React from "react";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { addToCart } from "../actions/actionCreator";

//Components
import Wrapper from "../Wrapper";
import Button from "../components/ui/Button";
import Image from "../components/ui/Image";

//Etc
import removeImg from "../img/off.svg";

const CartPage = ({ inCart, items, addToCart }) => {
  const itemsInCart = items.filter(item => inCart.includes(item.id));
  const totalPrice = itemsInCart.reduce((prev, next) => prev + next.price, 0);
  return (
    <Wrapper>
      {itemsInCart.length > 0 ? (
        <div className="container">
          <div className="table">
            <div className="table-row table-header">
              <div className="table-col col-md-8">
                <span>Product</span>
              </div>
              <div className="table-col table-col-center col-md-2">
                <span>Price</span>
              </div>
              <div className="table-col table-col-center col-md-2">
                <span>Total</span>
              </div>
            </div>
            {itemsInCart.map(el => (
              <div className="table-row" key={el.id}>
                <div className="table-col col-md-8">
                  <Image
                    src={removeImg}
                    alt="Remove"
                    className="remove-img"
                    onClick={() => addToCart(el.id)}
                  />
                  <Image
                    className="Cart-product__image"
                    src={el.image}
                    alt={el.text}
                  />
                  <Link
                    className="Cart-product__title"
                    to={`/product/${el.id}`}
                  >
                    {el.text}
                  </Link>
                </div>
                <div className="table-col table-col-center col-md-2">
                  <span className="Cart-product__price">{el.price}$</span>
                </div>
                <div className="table-col table-col-center col-md-2">
                  <span className="Cart-product__price">{el.price}$</span>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="table cart-page__summary">
            <div className="table-row">
              <div className="table-col col-md-8">
                <span>Total: </span>
              </div>
              <div className="table-col table-col-right col-md-4">
                <span>{totalPrice}$</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-col col-md-6">
                <Link to="/">
                  <Button value="Return to shop" />
                </Link>
              </div>
              <div className="table-col table-col-right col-md-6">
                <Link to="/checkout">
                  <Button color="green" value="Checkout" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-page__empty">
          <h1>Cart is empty!</h1>
          <Link to="/">Return to shop</Link>
        </div>
      )}
    </Wrapper>
  );
};

export default connect(
  ({ inCart, products: { items } }) => ({
    inCart,
    items
  }),
  { addToCart }
)(CartPage);
