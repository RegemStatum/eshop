import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
