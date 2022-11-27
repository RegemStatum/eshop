import React from "react";
import styles from "./Slide.module.scss";

const Slide = ({ image, primaryText, secondaryText }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="background" className={styles.image} />
      <div className={styles.text}>
        <h3>{primaryText}</h3>
        <p>{secondaryText}</p>
      </div>
    </div>
  );
};

export default Slide;
