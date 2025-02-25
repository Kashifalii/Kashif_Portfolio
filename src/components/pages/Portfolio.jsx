import React from "react";
import SwiperComponent from "../Swiper/swiper";
import styles from "../pages/portfolio.module.css";
import dots from "../assets/images/dots.png";

function Portfolio() {
  return (
    <div className={styles.portfolioSection} id="portfolioSection">
      <div className={styles.textWrapper} data-aos="fade-in">
        <h1 className={styles.title}>Recent Work</h1>
        <p className={styles.tagline}>
          <span>"</span> Where Vision Meets Precision to Create Unforgettable
          Digital Experiences <span>"</span>
        </p>
        <img src={dots} alt="dot images" className={styles.dots} />
        <p className={styles.para}>
          Here’s a glimpse of my latest projects, where I’ve combined
          creativity, technical skills, and a passion for problem-solving to
          deliver impactful solutions. Each project reflects my dedication to
          crafting user-friendly, visually appealing, and functional designs.
          Take a look at what I’ve been building lately!
        </p>
      </div>
      <div className={styles.swiperWrapper} data-aos="fade-up">
        <SwiperComponent />
      </div>
    </div>
  );
}

export default Portfolio;
