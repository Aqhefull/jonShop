import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

//Redux
import { connect } from "react-redux";
import {
  getFilteredProducts,
  addToCart,
  changePage
} from "../../actions/actionCreator";

//Components
import ProductItem from "../ProductItem";
import Button from "./../ui/Button";
import CartIcon from "../../img/cart.svg";
import NotCheckIcon from "../../img/off.svg";

//Tools
import { paginationCalc } from "../../tools";

class ProductList extends Component {
  state = {
      frontendProdList: [],
      productPages: 1,
      outputProductsOnPage: []
  }
  filterList = (productList, filterProducts) => {
    //Filter by sidebar
    let tempArr = productList;
    for (let key in filterProducts) {
      if (filterProducts.hasOwnProperty(key)) {
        tempArr = tempArr.filter(pl => {
          if (typeof filterProducts[key] === "object" || filterProducts[key] instanceof Array) {
            if (pl[key].some(r => filterProducts[key].includes("all") || filterProducts[key].includes(r))) {
              return pl;
            }
          } if (typeof filterProducts[key] === "string" || filterProducts[key] instanceof String) {
            if (filterProducts[key] === "all" || filterProducts[key] === pl[key]) {
              return pl;
            }
          }
          return false;
        });
      }
    }
    return tempArr;
  };

  sortByPhrase = (list, searchProduct) => list.filter(({ text }) => text.toUpperCase().indexOf(searchProduct.toUpperCase()) > -1 )

  sortList = (list, sortBy, getFilteredProducts, searchProduct) => {
    //Sorting by search input..
    const filteredList = this.sortByPhrase(list, searchProduct);
    //Receiving number of products (topbar)
    getFilteredProducts(filteredList);

    //Change sorting (if select in action)
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
  
  componentDidMount() {
    const { productList, filterProducts, sortBy, getFilteredProducts, searchProduct, currentPage, changePage, match } = this.props;
    console.log(match);
    if (match.path !== '/' && (match.params.id !== currentPage.currentPage)) changePage(match.params.id)
    //currentPage()
    this.setState({
      frontendProdList: this.sortList(
          this.filterList(productList, filterProducts),
          sortBy,
          getFilteredProducts,
          searchProduct
      ),
    }, () => this.setState({
        productPages: Math.ceil(this.state.frontendProdList.length / currentPage.productsPerPage),
        outputProductsOnPage: this.state.frontendProdList.filter((product, index) => {
          return (index >= currentPage.fromProduct - 1 && index <= currentPage.untilProduct - 1);
        })
    }))
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { productList, filterProducts, sortBy, getFilteredProducts, searchProduct, currentPage, changePage, history, match} = nextProps;
    if (match.path !== '/' && (match.params.id !== currentPage.currentPage)) changePage(match.params.id)
    this.setState({
      frontendProdList: this.sortList(
          this.filterList(productList, filterProducts),
          sortBy,
          getFilteredProducts,
          searchProduct
      ),
    }, () => this.setState({
        productPages: Math.ceil(this.state.frontendProdList.length / currentPage.productsPerPage),
        outputProductsOnPage: this.state.frontendProdList.filter((product, index) => {
          return (index >= currentPage.fromProduct - 1 && index <= currentPage.untilProduct - 1);
        })
    }, () => {
         if (!this.state.outputProductsOnPage.length && match.url !== '/page/1') {
           changePage("1");
           history.push("/page/1");
         }
    }))
  }
  render() {
    const { frontendProdList, outputProductsOnPage, productPages } = this.state;
    const { inCart, match, changePage, addToCart } = this.props;
    return frontendProdList.length > 0 ? (
      <>
        <TransitionGroup className="product-list">
          {outputProductsOnPage.map(({ id, image, text, price }) => (
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
        <ul className="product-pagination">
          {paginationCalc(1, productPages).map((el, i) => (
            <li
              key={el}
              className={
                Number(match.params.id) === Number(el) ||
                (match.path === "/" && el === 1)
                  ? "active"
                  : null
              }
            >
              <Link to={`/page/${el}`} onClick={() => changePage(el)}>
                {el}
              </Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <TransitionGroup className="product-list">
        <CSSTransition timeout={500} classNames="fadelist">
          <div className="product-not-found">
            <h2>Sorry, no product found :(</h2>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.array,
  filterProducts: PropTypes.object
};

ProductList.defaultProps = {
  productList: [],
  filterProducts: {}
};
export default withRouter(
  connect(
    ({ getFilteredProducts, inCart, searchProduct, currentPage }) => ({
      getFilteredProducts,
      inCart,
      searchProduct,
      currentPage
    }),
    { getFilteredProducts, addToCart, changePage }
  )(ProductList)
);
