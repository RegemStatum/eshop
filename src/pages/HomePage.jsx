import React from "react";
import Section from "../components/sections/Section";
import hotProducts from "../assets/images/hotProducts.svg";
import pros from "../assets/images/pros.svg";
import ProsGrid from "../components/pros/ProsGrid";

const Home = () => {
  return (
    <div>
      <Section>Slider</Section>
      <Section headerImage={hotProducts} headerText="Продукти">
        Гарячі Продукти
      </Section>
      <Section headerImage={pros} headerText="Переваги">
        <ProsGrid />
      </Section>
    </div>
  );
};

export default Home;
