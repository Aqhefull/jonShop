import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.sass';
import Wrapper from './Wrapper';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";

ReactDOM.render((
  <Provider store={store}>
     <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Wrapper} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));