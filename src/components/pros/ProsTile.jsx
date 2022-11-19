import React from "react";
import styles from "./ProsTile.module.scss";

const ProsTile = ({ text, image }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <img src={image} alt="tile-bg" className={styles.image} />
    </div>
  );
};

export default ProsTile;
