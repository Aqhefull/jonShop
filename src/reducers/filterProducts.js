import { FILTER_PRODUCT } from "../constants";
const PRODUCT_FILTER = {
  category: "all",
  color: "all",
  size: ["all"],
  vendor: ["all"],
  tags: ["all"]
};

const filterProducts = (state = PRODUCT_FILTER, { type, payload, itemSlug }) => {
  console.log(type, payload, itemSlug);
  switch (type) {
    case FILTER_PRODUCT:
      if (typeof state[itemSlug] === "object" || state[itemSlug] instanceof Array) {
        // If exist - delete
        if(state[itemSlug].includes(payload)) {
          if(state[itemSlug].length > 1) {
            return Object.assign({}, state, {
              [itemSlug]: [...state[itemSlug].filter(element => element !== payload)]
            });
          } else {
            return Object.assign({}, state, {
             [itemSlug]: ['all']
           });
          }
        }
        // delete default All
        if (state[itemSlug][0] === "all") {
          return Object.assign({}, state, {
            [itemSlug]: [payload]
          });
        } else {
          return Object.assign({}, state, {
            [itemSlug]: [...state[itemSlug], payload]
          });
        }

      } else {
        if (state[itemSlug] === payload) {
          return Object.assign({}, state, {
            [itemSlug]: "all"
          });
        } else {
          return Object.assign({}, state, {
            [itemSlug]: payload
          });
        }
        
      }
    default:
      return state;
  }
};

export default filterProducts;
