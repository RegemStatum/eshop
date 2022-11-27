import React, { useState } from "react";
import { useProductsContext } from "../../context/ProductsContext";

import closeIcon from "../../assets/images/close.svg";
import styles from "./FiltersSidebar.module.scss";
import FilterItem from "./FilterItem";
import { PrimaryButton } from "../ui/buttons";

const FilterSidebar = () => {
  const { closeFilters, isFiltersOpen, filterOptions, filterProducts } =
    useProductsContext();

  const { categories, colors, sizes, minPrice, maxPrice } = filterOptions;

  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    sizes: [],
    maxPrice,
  });

  const handleUpdateFiltersBtnClick = () => {
    const { categories, colors, sizes, maxPrice } = filters;
    filterProducts(categories, colors, sizes, maxPrice);
    closeFilters();
  };

  const handleClick = (value, property) => {
    let newFilters;
    if (!filters[property]) {
      newFilters = { ...filters, [property]: [value] };
      setFilters(newFilters);
      return;
    }

    let newValues = [...filters[property]];
    const itemIndex = filters[property].findIndex((item) => item === value);

    if (itemIndex === -1) {
      newValues.push(value);
    } else {
      newValues = newValues.filter((item) => item !== value);
    }
    newFilters = { ...filters, [property]: newValues };
    setFilters(newFilters);
  };

  const handlePriceChange = (e) => {
    const newMaxPrice = e.target.value;
    const newFilters = { ...filters, maxPrice: newMaxPrice };
    setFilters(newFilters);
  };

  return (
    <div
      className={`${styles.container} ${!isFiltersOpen ? styles.hidden : ""}`}
    >
      <div className={styles.innerContainer}>
        <img
          className={styles.closeBtn}
          src={closeIcon}
          alt="close"
          onClick={closeFilters}
        />
        <FilterItem header="Категорії">
          <div className={styles.categoriesContainer}>
            {categories.map((category, index) => (
              <p
                key={index}
                className={`${styles.category} ${
                  filters.categories.findIndex((item) => item === category) !==
                  -1
                    ? styles.checked
                    : ""
                }`}
                onClick={() => handleClick(category, "categories")}
              >
                {category}
              </p>
            ))}
          </div>
        </FilterItem>
        <FilterItem header="Кольори">
          <div className={styles.colorsContainer}>
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => handleClick(color, "colors")}
                className={`${styles.colorCheckbox} ${
                  filters.colors.findIndex((item) => item === color) !== -1
                    ? styles.checked
                    : ""
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </FilterItem>
        <FilterItem header="Розміри">
          <div className={styles.sizesContainer}>
            {sizes.map((size, index) => (
              <p
                key={index}
                className={`${styles.sizeCheckbox} ${
                  filters.sizes.findIndex((item) => item === size) !== -1
                    ? styles.checked
                    : ""
                }`}
                onClick={() => handleClick(size, "sizes")}
              >
                {size}
              </p>
            ))}
          </div>
        </FilterItem>
        <FilterItem header="Ціна">
          <div className={styles.priceContainer}>
            <span>{minPrice} грн</span>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={filters.maxPrice}
              onChange={handlePriceChange}
            ></input>
            <span>{filters.maxPrice} грн</span>
          </div>
        </FilterItem>
        <PrimaryButton onClick={handleUpdateFiltersBtnClick}>
          Застосувати фільтри
        </PrimaryButton>
      </div>
    </div>
  );
};

export default FilterSidebar;
