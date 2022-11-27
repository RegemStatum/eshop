import React from "react";
import mockProducts from "../../data/products";
import CategoryItem from "./CategoryItem";
import styles from "./CategoriesGrid.module.scss";

const CategoriesGrid = () => {
  const categories = Array.from(
    new Set(mockProducts.map((product) => product.type))
  );

  return (
    <div className={styles.container}>
      {categories.map((category, index) => (
        <CategoryItem key={index} name={category} />
      ))}
    </div>
  );
};

export default CategoriesGrid;
