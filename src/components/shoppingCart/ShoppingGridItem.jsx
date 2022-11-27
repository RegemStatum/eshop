import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import styles from "./ShoppingGridItem.module.scss";

const ShoppingGridItem = ({ photo, name, color, amount, price, size, id }) => {
  const { increaseProductAmountInCart, decreaseProductAmountInCart } =
    useAppContext();

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={photo} alt={name} className={styles.photo} />
        <div className={styles.text}>
          <p className={styles.name}>{name}</p>
          <div className={styles.colorContainer}>
            <p>Колір: </p>
            <div
              style={{ backgroundColor: color }}
              className={styles.color}
            ></div>
          </div>
          <div>
            <p>Розмір: "{size}"</p>
          </div>
          <div>
            <p>Ціна: {price} грн</p>
          </div>
        </div>
      </div>
      {/* amount btns */}
      <div className={styles.priceControl}>
        <div className={styles.amountControl}>
          <button
            className={styles.minusBtn}
            onClick={() => decreaseProductAmountInCart(id, color, size)}
          >
            -
          </button>
          <p className={styles.amount}>{amount}</p>
          <button
            className={styles.plusBtn}
            onClick={() => increaseProductAmountInCart(id, color, size)}
          >
            +
          </button>
        </div>
        <p className={styles.productTotalPrice}>
          Проміжна ціна: <span>{price * amount}</span> грн
        </p>
      </div>
    </div>
  );
};

export default ShoppingGridItem;
