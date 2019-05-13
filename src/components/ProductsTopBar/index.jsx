import React from 'react'

import './style.sass'
import Select, { SelectOption } from '../Select';

const ProductsTopBar = () => {
  return (
    <div className="products-top-bar">
      <Select id="sortBy">
        <SelectOption name="New" />
        <SelectOption name="Price UP" />
        <SelectOption name="Price Down" />
      </Select>
    </div>
  );
};

export default ProductsTopBar;