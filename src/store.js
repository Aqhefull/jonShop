import { createHashHistory } from "history";
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";

export const history = createHashHistory({
  hashType: 'slash'
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = preloadedState => (
  createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(routerMiddleware(history))
    ),
  )
);

const store = configureStore({});

export default store;
