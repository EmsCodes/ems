import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.scss";
import { useRef } from "react";
import useSwiperRef from "../../../hooks/useSwiperRef.js";

// modules import for swiper/carousel
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  A11y,
  EffectCube,
} from "swiper";

import "swiper/swiper-bundle.min.css";
import Link from "next/link";

function Carousel() {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  const swiperRef = useRef(null);

  const pagination = {
    //makes the bullets/dots clickable
    clickable: true,

    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
    // This puts the number of the slide on the bullets/dots
  };
  return (
    <>
      <Swiper
        navigation={{
          prevEl,
          nextEl,
        }}
        ref={swiperRef}
        breakpoints={{
          // when window width is >= 550px
          550: {
            //   width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            //   width: 768,
            slidesPerView: 2,
          },
          1000: {
            //   width: 1000,
            slidesPerView: 3,
          },
        }}
        cssMode={true}
        // navigation={true}
        pagination={pagination}
        spaceBetween={20}
        mousewheel={true}
        keyboard={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectCube]}
        className={styles.swiper}
      >
        <div>
          <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
          <SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
          <SwiperSlide className={styles.slide}>Slide 4</SwiperSlide>
          <SwiperSlide className={styles.slide}>Slide 5</SwiperSlide>
          <SwiperSlide className={styles.slide}>Slide 6</SwiperSlide>
        </div>
      </Swiper>
      <div className={styles.btnContainer}>
        <button className={styles.button} ref={prevElRef}></button>
        <button ref={nextElRef} className={styles.button}></button>
      </div>
    </>
  );
}

export default Carousel;
