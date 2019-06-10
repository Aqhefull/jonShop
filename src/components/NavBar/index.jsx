import React from "react";
//Components
import Cart from "../Cart";
import SearchPhrase from '../SearchPhrase'
import Logo from "../Logo";

const NavBar = () => (
  <nav className="NavBar">
      <div className="col-md-3"><Logo /></div>
      <div className="col-md-6"><SearchPhrase /></div>
      <div className="col-md-3"><Cart /></div>
  </nav>
);

export default NavBar 