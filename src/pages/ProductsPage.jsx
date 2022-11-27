import React, { useEffect, useState } from "react";
import ProductsGrid from "../components/products/ProductGrid";
import { useSearchParams } from "react-router-dom";
import mockProducts from "../data/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(mockProducts);

  useEffect(() => {
    const category = searchParams.get("category");
    if (!category) {
      setProducts(mockProducts);
      return;
    }
    const newProducts = mockProducts.filter(
      (product) => product.type === category
    );
    setProducts(newProducts);
  }, [searchParams]);

  return (
    <div className="page-min-height">
      <ProductsGrid products={products} searchParams={searchParams} />
    </div>
  );
};

export default Products;
