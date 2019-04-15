import React from "react";
import Products from "./containers/Products";
import Sidebar from "./containers/Sidebar";

const Wrapper = () => (
  <div className="main-wrapper">
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Products />
      </div>
    </div>
  </div>
);

export default Wrapper;
