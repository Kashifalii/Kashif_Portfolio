import React from "react";
import styles from "../pages/about.module.css";
import aboutImg from "../assets/images/aboutImg.jpg";
import aboutImgHz from "../assets/images/aboutImgHz.webp";
import dots from "../assets/images/dots.png";

function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.CardWrap} data-aos="fade-right">
        <img
          src={aboutImg}
          loading="lazy"
          alt="About me"
          className={styles.cardImg1}
        />
        <img
          src={aboutImgHz}
          loading="lazy"
          alt="About me"
          className={styles.cardImg2}
        />
      </div>
      <div className={styles.TextWrap} data-aos="fade-left">
        <h1 className={styles.title}>ABOUT ME</h1>
        <p className={styles.tagline}>
          I'm <span>Kashif Ali</span>, Frontend Developer / Graphic Designer
        </p>
        <img src={dots} alt="dots" className={styles.dots} />
        <p className={styles.para}>
          An experienced frontend developer with <span>two years</span> of
          hands-on experience, proficient in HTML, CSS, Bootstrap, Tailwind CSS,
          JavaScript, and React. I specialize in building responsive,
          high-performance, and visually stunning websites and web applications
          that enhance user engagement and business growth.
          <br /> From sleek <span>landing pages</span> to complex{" "}
          <span>web interfaces</span>, I focus on creating{" "}
          <span>pixel-perfect designs, seamless user experiences,</span> and{" "}
          <span>optimized performance</span>. With a keen eye for UI/UX design
          and a commitment to staying ahead with the latest web technologies, I
          ensure that every project exceeds expectations.
        </p>
        <a
          href="https://www.fiverr.com/kashifali82?up_rollout=true"
          className="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.hire}>
            <span>Hire Me</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
