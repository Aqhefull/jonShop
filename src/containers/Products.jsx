import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsTopBar from '../components/ProductsTopBar';
import ProductList from '../components/ProductList';

class Products extends Component {

  state = {}

  render() {
    const { products, filterProducts } = this.props;
    const isProductsExist = products.items && products.items.length > 0;
    return (
      <div className="products-wrapper col-md-9">
        {isProductsExist && (
          <React.Fragment>
            <ProductsTopBar />
            <ProductList
              productList={products.items}
              filterProducts={filterProducts}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}


export default connect(({ products, filterProducts }) => ({
  products,
  filterProducts
}))(Products);