import ProsTile from "./ProsTile";
import pros1 from "../../assets/images/pros/pros1.jpg";
import pros2 from "../../assets/images/pros/pros2.jpg";
import pros3 from "../../assets/images/pros/pros3.jpg";
import styles from "./ProsGrid.module.scss";

const ProsGrid = () => {
  return (
    <div className={styles.grid}>
      <ProsTile image={pros1} text="Легко підібрати" />
      <ProsTile image={pros2} text="Легко знайти" />
      <ProsTile image={pros3} text="Легко купити" />
    </div>
  );
};

export default ProsGrid;
