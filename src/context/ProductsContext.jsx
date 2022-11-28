import React, { useContext, useState, useEffect } from "react";
import mockProducts from "../data/products";

const Context = React.createContext();

const ProductsContext = ({ children }) => {
  const [productsToShow, setProductsToShow] = useState(mockProducts);
  const [sortOption, setSortOption] = useState("ASC");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    categories: [],
    colors: [],
    sizes: [],
    minPrice: 0,
    maxPrice: Infinity,
  });

  // set filtering options
  useEffect(() => {
    let maxPrice = 0;
    let minPrice = Infinity;
    const categories = Array.from(
      new Set(mockProducts.map((product) => product.type))
    );
    const colors = Array.from(
      new Set(mockProducts.map((product) => product.colors).flat())
    );
    const sizes = Array.from(
      new Set(mockProducts.map((product) => product.sizes).flat())
    );
    mockProducts.forEach((product) => {
      if (product.price < minPrice) {
        minPrice = product.price;
      }
      if (product.price > maxPrice) {
        maxPrice = product.price;
      }
    });
    const newFilterOptions = { categories, colors, sizes, minPrice, maxPrice };
    setFilterOptions(newFilterOptions);
  }, []);

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

  const openFilters = () => {
    setIsFiltersOpen(true);
  };

  const closeFilters = () => {
    setIsFiltersOpen(false);
  };

  const filterProducts = (categories, colors, sizes, maxPrice) => {
    let newProductsToShow = [...mockProducts];

    if (categories) {
      newProductsToShow = newProductsToShow.filter((product) => {
        const index = categories.findIndex(
          (category) => category === product.type
        );
        return index !== -1;
      });
    }

    if (colors) {
      newProductsToShow = newProductsToShow.filter((product) => {
        let isOk = false;
        for (let allowedColor of colors) {
          for (let productColor of product.colors) {
            if (allowedColor === productColor) {
              isOk = true;
              break;
            }
          }
          if (isOk) {
            break;
          }
        }
        return isOk;
      });
    }

    if (sizes) {
      newProductsToShow = newProductsToShow.filter((product) => {
        let isOk = false;
        for (let allowedSize of sizes) {
          for (let productSize of product.sizes) {
            if (allowedSize === productSize) {
              isOk = true;
              break;
            }
          }
          if (isOk) {
            break;
          }
        }
        return isOk;
      });
    }

    if (maxPrice) {
      newProductsToShow = newProductsToShow.filter(
        (product) => product.price <= Number(maxPrice)
      );
    }

    newProductsToShow = newProductsToShow.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    setProductsToShow(newProductsToShow);
    setSortOption("ASC");
  };

  const contextValue = {
    productsToShow,
    initializeProducts,
    sortOption,
    updateSortOption,
    openFilters,
    closeFilters,
    isFiltersOpen,
    filterOptions,
    filterProducts,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useProductsContext = () => {
  return useContext(Context);
};

export default ProductsContext;
