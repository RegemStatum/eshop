import React from "react";
import ProductsGrid from "../components/products/ProductGrid";
import mockProducts from "../data/products";

const Products = () => {
  return (
    <div className="page-min-height">
      <ProductsGrid products={mockProducts} />
    </div>
  );
};

export default Products;
