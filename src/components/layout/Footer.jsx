import React from "react";
import styles from "./Footer.module.scss";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Logo />
      </div>
      <p>All rights reserved &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
