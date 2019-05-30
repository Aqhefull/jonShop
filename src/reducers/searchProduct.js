import { SEARCH_UPDATE } from "../constants";

const searchProducts = (state = '', { type, searchPhrase }) => {
  switch (type) {
    case SEARCH_UPDATE:
      return searchPhrase;
    default:
      return state;
  }
};

export default searchProducts;
