import React from "react";
import { connect } from "react-redux";
import Input from "../Input";
import { history } from "../../store.js";
import { searchByPhrase } from "../../actions/actionCreator";

const SearchPhrase = ({ searchByPhrase, searchProduct }) => (
  <Input
    id="searchProduct"
    placeholder="Search items"
    getInputValue={value => searchByPhrase(value)}
    inputPress={() => history.push('/')}
    value={searchProduct}
    className="nav-search"
  />
);

export default connect(
  ({ searchByPhrase, searchProduct }) => ({ searchByPhrase, searchProduct }),
  { searchByPhrase }
)(SearchPhrase);
