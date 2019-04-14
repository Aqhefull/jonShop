import React, { Component } from 'react';
import Products from './containers/Products'
import Sidebar from './containers/Sidebar'

class Wrapper extends Component {
  render() {
    return (
        <div className="main-wrapper">
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <Products />
            </div>
          </div>
        </div>
    );
  }
}

export default Wrapper;
