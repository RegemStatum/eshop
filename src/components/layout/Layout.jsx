import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
