import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      Error 404
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
