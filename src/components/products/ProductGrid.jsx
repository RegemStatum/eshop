import React from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
