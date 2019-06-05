import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.sass';
import Home from './pages/Home';
import Single from "./pages/Single";
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Single} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));