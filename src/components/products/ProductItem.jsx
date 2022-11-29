import React from "react";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";

const ProductItem = ({ name, description, photo, id, price }) => {
  return (
    <Link to={`/products/${id}`} className={styles.container}>
      <img src={photo} alt={name} className={styles.photo} />
      <div className={styles.text}>
        <h4>{name}</h4>
        <p>{description}</p>
        <p className={styles.price}>{price} грн</p>
      </div>
    </Link>
  );
};

export default ProductItem;
