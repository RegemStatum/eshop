import React from "react";
import { SecondaryButton } from "../../components/ui/buttons/";
import { useProductsContext } from "../../context/ProductsContext";
import FilterSidebar from "./FilterSidebar";
import styles from "./FilterSection.module.scss";

const FilterSection = () => {
  const { openFilters } = useProductsContext();

  return (
    <div>
      <SecondaryButton onClick={openFilters} className={styles.filterBtn}>
        Фільтри
      </SecondaryButton>
      <FilterSidebar />
    </div>
  );
};

export default FilterSection;
