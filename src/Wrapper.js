import React from "react";
import NavBar from "./components/NavBar";

const Wrapper = ({children}) => (
  <div className="main-wrapper">
    <div className="container-fluid">
      <div className="row">
        <NavBar/>
      </div>
      <div className="row">
        {children}
      </div>
    </div>
  </div>
);

export default Wrapper;
