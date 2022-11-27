import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Slide from "./Slide";
import bgImg1 from "../../assets/images/slider/slideBest.jpg";
import bgImg2 from "../../assets/images/slider/slideCheapest.jpg";
import bgImg3 from "../../assets/images/slider/slideVast.jpg";
import arrowLeft from "../../assets/images/slider/left-arrow.svg";
import arrowRight from "../../assets/images/slider/right-arrow.svg";

import "swiper/css";
import styles from "./InfoSlider.module.scss";

const SwiperButtonPrev = ({ slideChange }) => {
  const [isVisible, setIsVisible] = useState(true);
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper.activeIndex !== 0) {
      setIsVisible(true);
    }

    if (swiper.activeIndex === 0) {
      setIsVisible(false);
    }
  }, [slideChange, swiper.activeIndex, swiper]);

  return (
    <img
      src={arrowLeft}
      alt="arrow"
      onClick={() => swiper.slidePrev()}
      className={isVisible ? styles.arrow1 : styles.arrowhide}
    />
  );
};

const SwiperButtonNext = ({ slideChange }) => {
  const [isVisible, setIsVisible] = useState(true);
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper.activeIndex !== 0) {
      setIsVisible(true);
    }

    if (swiper.activeIndex === 2) {
      setIsVisible(false);
    }
  }, [slideChange, swiper.activeIndex, swiper]);

  return (
    <img
      src={arrowRight}
      alt="arrow"
      onClick={() => {
        console.log(`swiper is: ${swiper}`);
        swiper.slideNext();
      }}
      className={isVisible ? styles.arrow2 : styles.arrowhide}
    />
  );
};

const InfoSlider = () => {
  const [slideId, setSlideId] = useState(0);

  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => setSlideId((prev) => prev + 1)}
      >
        {/* control btns */}
        <SwiperButtonPrev slideChange={slideId} />
        <SwiperButtonNext slideChange={slideId} />
        {/* slides */}
        <SwiperSlide>
          <Slide
            image={bgImg1}
            primaryText="Найкращий одяг"
            secondaryText="У нашому магазині найкращий одяг"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Slide
            image={bgImg2}
            primaryText="Найдешевший одяг"
            secondaryText="У нашому магазині найдешевший одяг"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Slide
            image={bgImg3}
            primaryText="Найобширніший вибір одягу"
            secondaryText="У нашому магазині найобширніший вибір одягу"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default InfoSlider;
