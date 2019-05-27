import React from "react";
import { connect } from "react-redux";
import "./style.sass";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Select, {SelectOption} from '../Select'
import Image from "../Image";
import Badge from "../Badge";
import Chip from "../Chip";
import Button from "../Button";
import { addToCart } from "../../actions/actionCreator";
import CartIcon from "../../img/cart.svg";
import NotCheckIcon from "../../img/off.svg";

const SingleProduct = ({ products, match, addToCart, inCart }) => {
  console.log(inCart)
  const { id: productID } = match.params;
  const { items } = products;
  const currentProduct = items.find(el => el.id === Number(productID));
  return currentProduct ? (
    <div className="main-wrapper">
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <section className="single-product">
            <div className="col-md-6 single-product__image">
              <Image
                src={currentProduct.image}
              />
            </div>
            <div className="col-md-6 single-product__content">
                <h1 className="single-product__title">{currentProduct.text}</h1>
                <div className="single-product__price">
                  <strong>{currentProduct.price}$</strong>
                </div>
                <hr/>
                  <h3>Quick Overview</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus reprehenderit, vitae, fuga magni quos iusto, molestias perspiciatis explicabo voluptates nesciunt aperiam ratione eligendi! Illo odit dicta eveniet exercitationem est?</p>
                <hr/>
                <div className="single-product-additional">
                  <div className="single-product-row">
                    <span>Size: </span>
                    <Select id="selectSize">
                      {currentProduct.size.map((size, i) => (
                        <SelectOption key={i} name={size} />
                      ))}
                    </Select>
                  </div>
                  <div className="single-product-row">
                    <span>Categories: </span><div className="single-product-cat">{currentProduct.category.map((cat, i) => <Chip key={i} text={cat}/>)}</div>
                  </div>
                  <div className="single-product-row">
                    <span>Vendor: </span><strong>{currentProduct.vendor}</strong>
                  </div>
                  <div className="single-product-row">
                    <span>Colors: </span><div className="single-product-colors">{currentProduct.color.map((color, i) => <Badge key={i} value="" color={color} circle />)}</div>
                  </div>
                </div>
                <hr/>
                <div className="single-product__addtocart">
                  <Button
                    color={inCart.includes(Number(productID)) ? 'green' : '' }
                    value={inCart.includes(Number(productID)) ? "In Cart" : "Buy now!"}
                    buttonClick={() => addToCart(Number(productID))}
                    image={
                      !inCart.includes(Number(productID)) ? CartIcon : NotCheckIcon
                    }
                  />
                </div>
                <hr/>
                <Link to={`/`}>Back to Home</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  ) : (
    "404"
  );
};

export default connect(
  ({ products, router, inCart }) => ({
    products,
    router,
    inCart
  }),
  { addToCart }
)(SingleProduct);
