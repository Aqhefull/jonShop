import React from "react";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { addToCart } from "../actions/actionCreator";

//Components
import Wrapper from "../Wrapper";
import Image from "../components/ui/Image";
import CheckoutForm from '../components/CheckoutForm'

//Etc
import removeImg from "../img/off.svg";



const itemsInCart = (inCart, filteredProducts) => filteredProducts.filter(item => inCart.includes(item.id));

const totalPrice = (itemsInCart) => itemsInCart.reduce((prev, next, i, array) => prev + next.price, 0);

const Checkout = ({inCart, filteredProducts, addToCart}) => (
  <Wrapper>
    {inCart.length > 0 ? 
    <>
    <div className="container-fluid">
      <div className="row">
        <h2 className="page-title">Checkout</h2>
      </div>
    </div>
    <div className="container checkout">
      <form className="form form--light" autoComplete="off">
        <div className="col-md-9">
          <CheckoutForm/>
        </div>
        <div className="col-md-3">
          <div className="checkout-summary">
            <ul>
            {
              (itemsInCart(inCart, filteredProducts).length > 0) && itemsInCart(inCart, filteredProducts).map((el) => (
                <li className="checkout-summary__product" key={el.id}>
                  <Image
                    src={removeImg}
                    alt="Remove"
                    className="remove-img"
                    onClick={() => addToCart(el.id)}
                  />
                  <Link className="checkout-summary__title" to={`/product/${el.id}`}>{el.text}</Link>
                  <span className="checkout-summary__price">
                    {el.price}$
                  </span>
                </li>
              ))
            }
          </ul>
          {
            (itemsInCart(inCart, filteredProducts).length > 0) && 
            <>
              <hr/>
              <div className="checkout-summary__total">
                <span>Total: </span><span>{totalPrice(itemsInCart(inCart, filteredProducts))}$</span>
              </div>
              <hr/>
            </>
          }
          </div>
        </div>
      </form>
    </div> 
    </> : 
          <div className="product-not-found">
            <h2>Sorry, your cart is empty :(</h2>
            <Link to="/">Return to shop</Link>
          </div>
    }
  </Wrapper>
);

export default connect(
  ({ inCart, filteredProducts }) => ({
    inCart,
    filteredProducts
  }),
  { addToCart }
)(Checkout);
