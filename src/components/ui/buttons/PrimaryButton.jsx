import React from "react";
import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${className} ${styles.btn}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
