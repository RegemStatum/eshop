import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = ({ children, header }) => {
  return (
    <div className={styles.container}>
      <h5>{header}</h5>
      {children}
    </div>
  );
};

export default FilterItem;
