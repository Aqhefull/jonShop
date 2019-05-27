import { UPDATE_CART } from "../constants";

const inCart = (state = [], { type, id }) => {
  switch (type) {
    case UPDATE_CART:
      //in future fix if you want to increment your prod cart num
      let newState = [...state]
      if(!newState.includes(id)) {
        return [...newState, id]
      } else {
        newState.splice(newState.indexOf(id), 1)
        return newState
      }
    default:
      return state;
  }
};

export default inCart;
