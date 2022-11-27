import React, { useContext, useState } from "react";

const Context = React.createContext();

const AppContext = ({ children }) => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);

  const openHeaderMenu = () => {
    setIsHeaderMenuOpen(true);
  };
  const closeHeaderMenu = () => {
    setIsHeaderMenuOpen(false);
  };

  const addProductToCart = (id, amount, color, size) => {
    const newProductsInCart = [{ id, amount, color, size }, ...productsInCart];
    setProductsInCart(newProductsInCart);
  };

  const contextValue = {
    isHeaderMenuOpen,
    openHeaderMenu,
    closeHeaderMenu,
    addProductToCart,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useAppContext = () => {
  return useContext(Context);
};

export default AppContext;
