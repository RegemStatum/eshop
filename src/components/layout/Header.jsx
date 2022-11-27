import React from "react";
import Logo from "./Logo";
import styles from "./Header.module.scss";
import burgerMenu from "../../assets/images/burgerMenu.svg";
import shopCart from "../../assets/images/shopCart.svg";
import { useAppContext } from "../../context/AppContext";
import navLinks from "../../data/navLinks";
import { Link } from "react-router-dom";

const Header = () => {
  const { isHeaderMenuOpen, openHeaderMenu, closeHeaderMenu } = useAppContext();

  const handleMenuBtnClick = () => {
    isHeaderMenuOpen ? closeHeaderMenu() : openHeaderMenu();
  };

  const handleCartBtnClick = () => {
    closeHeaderMenu();
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.links}>
        {navLinks.map((link, index) => {
          return (
            <Link key={index} to={link.to}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className={styles.btnsContainer}>
        <Link to="/cart" onClick={handleCartBtnClick}>
          <img src={shopCart} alt="shop-cart" className={styles.shoppingCart} />
        </Link>
        <img
          src={burgerMenu}
          alt="burger-menu"
          className={styles.burgerMenu}
          onClick={handleMenuBtnClick}
        />
      </div>
    </header>
  );
};

export default Header;
