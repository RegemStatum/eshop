import React from "react";
import styles from "./SingleProductSection.module.scss";

const SingleProductSection = ({ name, children }) => {
  return (
    <section className={styles.container}>
      <h4 className={styles.header}>{name}</h4>
      {children}
    </section>
  );
};

export default SingleProductSection;
