import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.sass';
import Wrapper from './Wrapper';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <Wrapper />
  </Provider>
), document.getElementById('root'));