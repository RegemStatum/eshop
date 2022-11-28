import React from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ products }) => {
  if (products.length === 0 || !products) {
    return (
      <h2>
        Вибачте продуктів немає. <br />
        Спробуйте оновити фільтри
      </h2>
    );
  }

  return (
    <div className={styles.container}>
      {products.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
