import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <p>E-shop</p>
      </div>
    </Link>
  );
};

export default Logo;
