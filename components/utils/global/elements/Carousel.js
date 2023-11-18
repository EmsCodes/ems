import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.scss";
import { useRef } from "react";
import Image from "next/image";
import prosjektEksamen from "../../../../public/images/images/holidaze.jpg";
import handMade from "../../../../public/images/images/handmade.png";
import theBean from "../../../../public/images/images/the-bean.png";
import csm from "../../../../public/images/images/csm.jpg";
import portfolio from "../../../../public/images/images/portfolio-2.png";
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
          <SwiperSlide className={styles.slide}>
            <Link
              target="_blank"
              href="https://holidaze-zeta.vercel.app/accommodations"
            >
              <Image src={prosjektEksamen} loading="eager" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Link
              target="_blank"
              href="https://handmade-semesterproject.netlify.app/"
            >
              <Image src={handMade} loading="eager" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Link
              target="_blank"
              href="https://handmade-semesterproject.netlify.app/"
            >
              <Image src={csm} loading="eager" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Link
              target="_blank"
              href="https://handmade-semesterproject.netlify.app/"
            >
              <Image src={theBean} loading="eager" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Link
              target="_blank"
              href="https://handmade-semesterproject.netlify.app/"
            >
              <Image src={portfolio} loading="eager" />
            </Link>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className={`${styles.btnContainer} sr-only`}>
        <button className={styles.button} ref={prevElRef}>
          Prev
        </button>
        <button ref={nextElRef} className={styles.button}>
          Next
        </button>
      </div>
    </>
  );
}

export default Carousel;
