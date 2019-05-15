import { SORT_PRODUCT } from "../constants";

const sortProducts = (state = 'new', { type, sortBy}) => {
  switch (type) {
    case SORT_PRODUCT:
      return sortBy;
    default:
      return state;
  }
}
export default sortProducts;