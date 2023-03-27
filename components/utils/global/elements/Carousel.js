import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.scss";

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

function Carousel() {
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          //   width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          //   width: 768,
          slidesPerView: 2,
        },
        1000: {
          //   width: 768,
          slidesPerView: 3,
        },
      }}
      //   cssMode={true}
      navigation={true}
      pagination={true}
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
  );
}

export default Carousel;
