import React from "react";
import logo from "../../assets/images/logo.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
      <p>E-shop</p>
    </div>
  );
};

export default Logo;
