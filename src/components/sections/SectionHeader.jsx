import React from "react";
import styles from "./SectionHeader.module.scss";

const SectionHeader = ({ image, text }) => {
  return (
    <div className={styles.container}>
      {image && (
        <img src={image} alt="section-header" className={styles.image} />
      )}
      <h2 className={styles.text}>{text}</h2>
    </div>
  );
};

export default SectionHeader;
