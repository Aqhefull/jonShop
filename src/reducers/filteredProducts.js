import { FILTERED_PRODUCTS } from "../constants";

const filteredProducts = (state = "", { type, prodArr }) => {
  switch (type) {
    case FILTERED_PRODUCTS:
      return prodArr;
    default:
      return state;
  }
};
export default filteredProducts;
