import React, { Component } from 'react'
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { addToCart } from "../../actions/actionCreator";

//Components
import Image from "../ui/Image";
import Button from "../ui/Button";

//Etc
import CartIcon from './../../img/cart.svg'
import removeImg from "./../../img/off.svg";


class Cart extends Component {
  state = {
    cartOpen: false
  }
  handleClick = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  }

  render() {
    const { inCart, items, addToCart } = this.props;
    const { cartOpen } = this.state;
    const itemsInCart = items.filter((item) => inCart.includes(item.id))
    const totalPrice = itemsInCart.reduce(
      (prev, next, i, array) => prev + next.price, 0
    )
    return (
      <div className="Cart" onClick={() => this.handleClick(inCart, items)}>
        <div className="Cart__container">
          <div className="Cart-text">
            <span className="Cart-text__info">
              {inCart.length > 0 ? "Items in cart" : "Cart is empty!"}
            </span>
            {inCart.length > 0 ? (
              <span className="Cart-text__count">{inCart.length}</span>
            ) : null}
          </div>
          <Image className="Cart__icon" src={CartIcon} />
        </div>
        {cartOpen && <div className="Cart__dropdown">
          {itemsInCart.length === 0 && <span>Empty!</span>}
          <ul>
            {
              (itemsInCart.length > 0) && itemsInCart.map((el) => (
                <li className="Cart-product" key={el.id}>
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
                  <Link className="Cart-product__title" to={`/product/${el.id}`}>{el.text}</Link>
                  <span className="Cart-product__price">
                    {el.price}$
                  </span>
                </li>
              ))
            }
          </ul>
          {
            (itemsInCart.length > 0) && 
            <>
              <div className="Cart-total">
                <span>Total: </span><span>{totalPrice}$</span>
              </div>
              <hr/>
              <div className="Cart-actions">
                <Link to='/cart'><Button value='View Cart'/></Link>
                <Link to='/checkout'><Button color="green" value='Checkout'/></Link>
              </div>
            </>
          }
          </div>}
          
      </div>
    );
  }
};

export default connect(
  ({ inCart, products: { items } }) => ({
    inCart,
    items
  }),
  { addToCart }
)(Cart);
