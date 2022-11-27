import React, { useContext, useState } from "react";

const Context = React.createContext();

const AppContext = ({ children }) => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);

  const openHeaderMenu = () => {
    setIsHeaderMenuOpen(true);
  };
  const closeHeaderMenu = () => {
    setIsHeaderMenuOpen(false);
  };

  const contextValue = { isHeaderMenuOpen, openHeaderMenu, closeHeaderMenu };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useAppContext = () => {
  return useContext(Context);
};

export default AppContext;
