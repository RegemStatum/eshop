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

  const checkIfItemIsInProductCart = (id, color, size) => {
    console.log("checking");

    const item = productsInCart.find(
      (product) =>
        Number(product.id) === Number(id) &&
        product.color === color &&
        product.size === size
    );

    console.log(item);

    return !!item;
  };

  const addProductToCart = (id, amount, color, size, price) => {
    // check if item is already in the cart
    if (checkIfItemIsInProductCart(id, color, size)) {
      return "Цей продукт уже є у корзині!";
    }
    const newProductsInCart = [
      { id, amount, color, size, price },
      ...productsInCart,
    ];
    setProductsInCart(newProductsInCart);
  };

  const deleteItemFromCart = (id, color, size) => {
    const productToDeleteIndex = productsInCart.findIndex(
      (product) =>
        Number(product.id) === Number(id) &&
        product.size === size &&
        product.color === color
    );
    const newProducts = [...productsInCart];
    newProducts.splice(productToDeleteIndex, 1);
    setProductsInCart(newProducts);
  };

  const increaseProductAmountInCart = (id, color, size) => {
    const product = productsInCart.find(
      (product) =>
        Number(product.id) === Number(id) &&
        product.color === color &&
        product.size === size
    );

    const newProductAmount = product.amount + 1;

    if (newProductAmount < 10) {
      const newProduct = { ...product, amount: newProductAmount };
      const newProducts = productsInCart.map((productInCart) => {
        return Number(productInCart.id) === Number(id) &&
          productInCart.size === size &&
          productInCart.color === color
          ? newProduct
          : productInCart;
      });
      setProductsInCart(newProducts);
    }
  };

  const decreaseProductAmountInCart = (id, color, size) => {
    const product = productsInCart.find(
      (product) =>
        Number(product.id) === Number(id) &&
        product.color === color &&
        product.size === size
    );
    const newProductAmount = product.amount - 1;

    if (newProductAmount >= 1) {
      const newProduct = { ...product, amount: newProductAmount };
      const newProducts = productsInCart.map((productInCart) => {
        return Number(productInCart.id) === Number(id) &&
          productInCart.size === size &&
          productInCart.color === color
          ? newProduct
          : productInCart;
      });
      setProductsInCart(newProducts);
    }

    if (newProductAmount === 0) {
      deleteItemFromCart(id, color, size);
    }
  };

  const clearCart = () => {
    setProductsInCart([]);
  };

  const contextValue = {
    isHeaderMenuOpen,
    productsInCart,
    openHeaderMenu,
    closeHeaderMenu,
    addProductToCart,
    increaseProductAmountInCart,
    decreaseProductAmountInCart,
    clearCart,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useAppContext = () => {
  return useContext(Context);
};

export default AppContext;
