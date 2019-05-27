import React from "react";
import { Link } from "react-router-dom";
import "./styles.sass";

const Logo = () => (
  <div className="Logo">
    <Link to={`/`}>
      <h1>
        Art-<span>SHOP</span>
      </h1>
    </Link>
  </div>
);

export default Logo 