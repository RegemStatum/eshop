import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { PrimaryButton } from "../../components/ui/buttons/";
import styles from "./ShoppingClearBuy.module.scss";

const ShoppingClearBuy = () => {
  const { productsInCart, clearCart } = useAppContext();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = productsInCart.reduce((totalPrice, product) => {
      return (
        Number(totalPrice) + Number(product.price) * Number(product.amount)
      );
    }, []);
    setTotalPrice(newTotalPrice);
  }, [productsInCart]);

  return (
    <div className={styles.container}>
      <button onClick={clearCart} className={styles.clearBtn}>
        Очистити корзину
      </button>
      <div className={styles.buyContainer}>
        <p className={styles.price}>
          Загальна ціна: <span>{totalPrice} </span>грн
        </p>
        <PrimaryButton className={styles.buyBtn}>Купити</PrimaryButton>
      </div>
    </div>
  );
};

export default ShoppingClearBuy;
