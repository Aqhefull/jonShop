import React from 'react'
import { connect } from "react-redux";
import './style.sass'
import Select, { SelectOption } from '../Select';
import { switchSortProducts } from "../../actions/actionCreator";

const ProductsTopBar = ({ switchSortProducts }) => {
  return (
    <div className="products-top-bar">
      <div className="products-top-bar__sort">
        <label>Sort by: </label>
        <Select id="sortBy" onSelectChange={a => switchSortProducts(a)}>
          <SelectOption name="New" />
          <SelectOption name="Price UP" />
          <SelectOption name="Price Down" />
        </Select>
      </div>
    </div>
  );
};

export default connect(
  null,
  { switchSortProducts }
)(ProductsTopBar);