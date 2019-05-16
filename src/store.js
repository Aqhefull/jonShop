import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import { save } from 'redux-localstorage-simple'

export const history = createBrowserHistory();

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
      applyMiddleware(save({ namespace: 'todo-list' }), routerMiddleware(history))
    ),
  )
);

const store = configureStore({});

export default store;
