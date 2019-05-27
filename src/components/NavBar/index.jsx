import React from "react";
import "./styles.sass";
import Cart from "../Cart";
import Logo from "../Logo";

const NavBar = () => {
  return <nav className="NavBar"><Logo/><Cart/></nav>;
};

export default NavBar 