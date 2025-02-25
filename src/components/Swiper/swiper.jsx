import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../Swiper/swiper.module.css";
import { Autoplay } from "swiper/modules";
import { FaPaperPlane } from "react-icons/fa";
// Slider images
import slideImg1 from "../assets/images/swiperImages/torung.jpg";
import slideImg2 from "../assets/images/swiperImages/ashley.jpg";
import slideImg3 from "../assets/images/swiperImages/avo.jpg";
import slideImg4 from "../assets/images/swiperImages/eagle.jpg";
import slideImg5 from "../assets/images/swiperImages/haswell.jpg";
import slideImg6 from "../assets/images/swiperImages/warrior.jpg";
import slideImg7 from "../assets/images/swiperImages/nimari.jpg";
import slideImg8 from "../assets/images/swiperImages/bethany.jpg";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        className={styles.swiper}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slideImg1} alt="" />
          <a href="https://kashifalii.github.io/TOUROG-WEBSITE/">
            Visit Site <FaPaperPlane />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slideImg2} alt="" />
          <a
            href="https://kashifalii.github.io/ASHLEY_WEBSITE/"
            target="_blank"
          >
            Visit Site <FaPaperPlane />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slideImg3} alt="" />
          <a href="https://kashifalii.github.io/Avo-website/" target="_blank">
            Visit Site <FaPaperPlane />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slideImg4} alt="" />
          <a
            href="https://kashifalii.github.io/EAGLEEYE_WEBSITE/"
            target="_blank"
          >
            Visit Site <FaPaperPlane />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slideImg5} alt="" />
          <a
            href="https://kashifalii.github.io/Haswell-website/"
            target="_blank"
          >
            Visit Site <FaPaperPlane />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slideImg6} alt="" />
          <a
            href="https://kashifalii.github.io/warrior-website/"
            target="_blank"
          >
            Visit Site <FaPaperPlane />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slideImg7} alt="" />
          <a
            href="https://kashifalii.github.io/nimari-website/"
            target="_blank"
          >
            Visit Site <FaPaperPlane />
          </a>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slideImg8} alt="" />
          <a
            href="https://kashifalii.github.io/bethany-website/"
            target="_blank"
          >
            Visit Site <FaPaperPlane />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
