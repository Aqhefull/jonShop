import React from "react";

//Redux
import { connect } from "react-redux";
import { history } from "../../store.js";
import { searchByPhrase } from "../../actions/actionCreator";

//Components
import Input from "../ui/Input";

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
