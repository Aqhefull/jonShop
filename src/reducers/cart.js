import { UPDATE_CART } from "../constants";

const inCart = (state = [], { type, id }) => {
  switch (type) {
    case UPDATE_CART:
      //in future fix if you want to increment your prod cart num
      let newState = [...state]
      return !newState.includes(id) ? [...newState, id] : newState.splice(id, 1);
    default:
      return state;
  }
};

export default inCart;
