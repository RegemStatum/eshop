import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const [productId, setProductId] = useState("");

  // set product id on page load
  useEffect(() => {
    const pathArr = location.pathname.split("/");
    const newProductId = pathArr[pathArr.length - 1];
    setProductId(newProductId);
  }, [location]);

  return <div>SingleProduct with id {productId}</div>;
};

export default SingleProduct;
