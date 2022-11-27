import React from "react";
import ShoppingGrid from "../components/shoppingCart/ShoppingGrid";
import { useAppContext } from "../context/AppContext";

import styles from "../assets/scss/pages/ShoppingCartPage.module.scss";
import ShoppingClearBuy from "../components/shoppingCart/ShoppingClearBuy";

const ShoppingCart = () => {
  const { productsInCart } = useAppContext();

  if (productsInCart.length === 0) {
    return (
      <div className="page-min-height">
        <p className={styles.noProducts}>
          Ви ще не зробили свої покупки! <br />
          Будь ласка додайте декілька товарів до кошику
        </p>
      </div>
    );
  }

  return (
    <div className="page-min-height">
      <ShoppingGrid products={productsInCart} />
      <ShoppingClearBuy />
    </div>
  );
};

export default ShoppingCart;
