import React, { useContext, useEffect, useState } from "react";
import mockProducts from "../data/products";

const Context = React.createContext();

const ProductsContext = ({ children }) => {
  const [productsToShow, setProductsToShow] = useState(mockProducts);
  const [sortOption, setSortOption] = useState("ASC");

  // set products on page rerender
  const initializeProducts = (category) => {
    let newProducts;

    if (!category) {
      newProducts = mockProducts.sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }

    if (category) {
      console.log("Initializing with category", category);
      newProducts = mockProducts
        .filter((product) => product.type === category)
        .sort((a, b) => {
          const nameA = a.name;
          const nameB = b.name;
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
    }
    setProductsToShow(newProducts);
    setSortOption("ASC");
  };

  const updateSortOption = (value) => {
    setSortOption(value);
    sortProducts(value);
  };

  const sortProducts = (value) => {
    if (value === "ASC") {
      const newProductsToShow = [...productsToShow].sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      console.log(newProductsToShow);
      setProductsToShow(newProductsToShow);
    }

    if (value === "DESC") {
      const newProductsToShow = [...productsToShow].sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
      setProductsToShow(newProductsToShow);
    }

    if (value === "LOWHIGH") {
      const newProductsToShow = [...productsToShow].sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;
        if (priceA < priceB) return -1;
        if (priceA > priceB) return 1;
        return 0;
      });
      setProductsToShow(newProductsToShow);
    }

    if (value === "HIGHLOW") {
      const newProductsToShow = [...productsToShow].sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;
        if (priceA > priceB) return -1;
        if (priceA < priceB) return 1;
        return 0;
      });
      setProductsToShow(newProductsToShow);
    }
  };

  const contextValue = {
    productsToShow,
    initializeProducts,
    sortOption,
    updateSortOption,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useProductsContext = () => {
  return useContext(Context);
};

export default ProductsContext;
