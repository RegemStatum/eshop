import React, { useEffect, useState } from "react";
import mockProducts from "../../data/products";
import SingleProductSection from "./SingleProductSection";
import styles from "./SingleProduct.module.scss";
import { PrimaryButton } from "../ui/buttons";
import { useAppContext } from "../../context/AppContext";

const SingleProduct = ({ id }) => {
  const [product, setProduct] = useState({
    photo: null,
    name: "",
    description: "",
    colors: [],
    sizes: [],
    price: 0,
  });
  const [chosenColor, setChosenColor] = useState();
  const [chosenSize, setChosenSize] = useState();
  const [productAmount, setProductAmount] = useState(1);
  const [label, setLabel] = useState({ status: null, msg: "" });
  const { addProductToCart } = useAppContext();

  useEffect(() => {
    const newProduct = mockProducts.find(
      (product) => product.id === Number(id)
    );
    setChosenColor(newProduct.colors[0] || "black");
    setChosenSize(newProduct.sizes[0] || "m");
    setProduct(newProduct);
  }, [id]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLabel({ status: null, msg: "" });
    }, 3000);

    return () => clearTimeout(timer);
  }, [label.status]);

  const { photo, name, description, colors, sizes, price } = product;

  const increaseAmount = () => {
    const newProductAmount = productAmount + 1;
    if (newProductAmount < 10) {
      setProductAmount(newProductAmount);
    }
  };

  const decreaseAmount = () => {
    const newProductAmount = productAmount - 1;
    if (newProductAmount >= 1) {
      setProductAmount(newProductAmount);
    }
  };

  const handleAddToCart = () => {
    const msg = addProductToCart(
      id,
      productAmount,
      chosenColor,
      chosenSize,
      price
    );
    setLabel({ status: true, msg: msg || "Продукт успішно додано!" });
  };

  if (!product || !product.photo || !product.name) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      {/* image */}
      <img src={photo} alt={name} className={styles.photo} />
      {/* text */}
      <div className={styles.text}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      {/* colors and sizes */}
      <div className={styles.options}>
        <SingleProductSection name="Колір">
          <div className={styles.colorsContainer}>
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => {
                  setChosenColor(color);
                }}
                className={`${styles.colorCheckbox}  ${
                  chosenColor === color ? styles.checked : ""
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </SingleProductSection>
        <SingleProductSection name="Розмір">
          <div className={styles.sizesContainer}>
            {sizes.map((size, index) => (
              <p
                key={index}
                className={`${styles.sizeCheckbox} ${
                  chosenSize === size ? styles.checked : ""
                }`}
                onClick={() => {
                  setChosenSize(size);
                }}
              >
                {size}
              </p>
            ))}
          </div>
        </SingleProductSection>
      </div>
      {/* add to cart */}
      <div className={styles.cartSection}>
        <div className={styles.amountControl}>
          <button className={styles.minusBtn} onClick={decreaseAmount}>
            -
          </button>
          <p className={styles.amount}>{productAmount}</p>
          <button className={styles.plusBtn} onClick={increaseAmount}>
            +
          </button>
        </div>
        <p className={styles.price}>
          {price * productAmount} <span>грн</span>
        </p>
      </div>
      {/* info label */}
      {label.status && <p className={styles.label}>{label.msg}</p>}
      <PrimaryButton className={styles.addToCartBtn} onClick={handleAddToCart}>
        Додати у кошик
      </PrimaryButton>
    </div>
  );
};

export default SingleProduct;
