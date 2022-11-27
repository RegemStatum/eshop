import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SingleProduct from "../components/products/SingleProduct";

const SingleProductPage = () => {
  const params = useParams();

  return (
    <div className="page-min-height">
      <SingleProduct id={params.id} />
    </div>
  );
};

export default SingleProductPage;
