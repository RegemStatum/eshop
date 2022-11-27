import React, { useEffect } from "react";
import ProductsGrid from "../components/products/ProductGrid";
import { useSearchParams } from "react-router-dom";
import SortProducts from "../components/sorting/SortProducts";
import { useProductsContext } from "../context/ProductsContext";
import FilterSection from "../components/filtering/FilterSection";
import styles from "../assets/scss/pages/ProductsPage.module.scss";

const Products = () => {
  const [searchParams] = useSearchParams();
  const { productsToShow, initializeProducts } = useProductsContext();

  useEffect(() => {
    const category = searchParams.get("category");
    initializeProducts(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className="page-min-height">
      {/* sorting and filtering */}
      <div className={styles.sortingFilteringContainer}>
        <FilterSection />
        <SortProducts />
      </div>
      {/* products */}
      <ProductsGrid products={productsToShow} searchParams={searchParams} />
    </div>
  );
};

export default Products;
