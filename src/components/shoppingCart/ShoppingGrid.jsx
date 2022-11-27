import React from "react";
import ShoppingGridItem from "./ShoppingGridItem";
import mockProducts from "../../data/products";

import styles from "./ShoppingGrid.module.scss";

const ShoppingGrid = ({ products }) => {
  const productsInfo = products.map((product) => {
    const productInfo = mockProducts.find(
      (mockProduct) => Number(product.id) === Number(mockProduct.id)
    );
    const { name, photo, price } = productInfo;
    return { ...product, name, photo, price };
  });

  return (
    <div className={styles.container}>
      {productsInfo.map((product, index) => (
        <ShoppingGridItem key={index} {...product} />
      ))}
    </div>
  );
};

export default ShoppingGrid;
