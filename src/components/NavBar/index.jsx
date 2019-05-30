import React from "react";
import "./styles.sass";
import Cart from "../Cart";
import SearchPhrase from '../SearchPhrase'
import Logo from "../Logo";

const NavBar = () => (
  <nav className="NavBar">
      <div class="col-md-3"><Logo /></div>
      <div class="col-md-6"><SearchPhrase /></div>
      <div class="col-md-3"><Cart /></div>
  </nav>
);

export default NavBar 