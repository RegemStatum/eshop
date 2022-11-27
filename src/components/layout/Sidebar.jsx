import React from "react";
import { useAppContext } from "../../context/AppContext";
import styles from "./Sidebar.module.scss";
import navLinks from "../../data/navLinks";
import { Link } from "react-router-dom";

const SidebarLink = ({ name, icon, to, closeHeaderMenu }) => {
  return (
    <Link to={to} className={styles.link} onClick={closeHeaderMenu}>
      <img src={icon} alt="sidebar-icon" />
      <p>{name}</p>
    </Link>
  );
};

const Sidebar = () => {
  const { isHeaderMenuOpen, closeHeaderMenu } = useAppContext();

  return (
    <div
      className={`${styles.container} ${
        !isHeaderMenuOpen ? styles.containerHide : ""
      } `}
    >
      {navLinks.map((link, index) => {
        return (
          <SidebarLink
            key={index}
            {...link}
            closeHeaderMenu={closeHeaderMenu}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
