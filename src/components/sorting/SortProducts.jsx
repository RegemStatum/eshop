import React from "react";
import { useProductsContext } from "../../context/ProductsContext";
import styles from "./SortProducts.module.scss";

const SortProducts = () => {
  const { sortOption, updateSortOption } = useProductsContext();

  const changeOption = (e) => {
    updateSortOption(e.target.value);
  };

  return (
    <select
      value={sortOption}
      onChange={changeOption}
      className={styles.select}
    >
      <option value="ASC">А - Я</option>
      <option value="DESC">Я - А</option>
      <option value="LOWHIGH">Від дешевих до дорогих</option>
      <option value="HIGHLOW">Від дорогих до дешевих</option>
    </select>
  );
};

export default SortProducts;
