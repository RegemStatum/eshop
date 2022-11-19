import React from "react";
import SectionHeader from "./SectionHeader";
import styles from "./Section.module.scss";

const Section = ({ children, headerText, headerImage }) => {
  return (
    <section className={styles.section}>
      <SectionHeader text={headerText} image={headerImage} />
      {children}
    </section>
  );
};

export default Section;
