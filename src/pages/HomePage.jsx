import React from "react";
import Section from "../components/sections/Section";
import hotProducts from "../assets/images/hotProducts.svg";
import pros from "../assets/images/pros.svg";
import ProsGrid from "../components/pros/ProsGrid";
import InfoSlider from "../components/infoSlider/InfoSlider";
import ProductGrid from "../components/products/ProductGrid";
import mockProducts from "../data/products";

const Home = () => {
  const featuredProducts = mockProducts.filter((product) => product.featured);

  return (
    <div>
      {/* slider */}
      <InfoSlider />
      {/* featured products  */}
      <Section headerImage={hotProducts} headerText="Продукти">
        <ProductGrid products={featuredProducts} />
      </Section>
      {/* pros  */}
      <Section headerImage={pros} headerText="Переваги">
        <ProsGrid />
      </Section>
    </div>
  );
};

export default Home;
