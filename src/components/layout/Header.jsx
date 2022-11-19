import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      Header
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Header;
