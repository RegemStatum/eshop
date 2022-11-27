import React from "react";
import styles from "./ProductItem.module.scss";

const ProductItem = ({ name, description, photo }) => {
  return (
    <div className={styles.container}>
      <img src={photo} alt={name} className={styles.photo} />
      <div className={styles.text}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
