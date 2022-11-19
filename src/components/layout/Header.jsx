import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Header.module.scss";
import burgerMenu from "../../assets/images/burgerMenu.svg";
import shopCart from "../../assets/images/shopCart.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.btnsContainer}>
        <img src={shopCart} alt="shop-cart" className={styles.shoppingCart} />
        <img src={burgerMenu} alt="burger-menu" className={styles.burgerMenu} />
      </div>
    </header>
  );
};

export default Header;
