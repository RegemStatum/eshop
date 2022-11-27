import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.scss";

const CategoryItem = ({ name }) => {
  return (
    <Link to="/products" className={styles.container}>
      {name}
    </Link>
  );
};

export default CategoryItem;
