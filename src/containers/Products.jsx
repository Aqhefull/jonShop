import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';

//Components
import ProductsTopBar from '../components/ProductsTopBar';
import ProductList from '../components/ProductList';

class Products extends Component {

  state = {}

  render() {
    const { products, filterProducts, sortProducts } = this.props;
    const isProductsExist = products.items && products.items.length > 0;
    return (
      <div className="products-wrapper col-md-9">
        {isProductsExist && (
          <React.Fragment>
            <ProductsTopBar />
            <ProductList
              productList={products.items}
              filterProducts={filterProducts}
              sortBy={sortProducts}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}


export default connect(({ products, filterProducts, sortProducts }) => ({
  products,
  filterProducts,
  sortProducts
}))(Products);