import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import styles from "../pages/header.module.css";
import img1 from "../assets/images/header-img.webp";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Cv from "../assets/Cv.pdf";

function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div
          className={styles.textWrap}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h2 className={styles.hi}>HI THERE,</h2>
          <h1 className={styles.name}>
            <span className="text-white">I'M</span> KASHIF ALI
          </h1>
          <div>
            <TypeAnimation
              sequence={[
                "Frontend Developer & Graphic Designer",
                2000,
                "Frontend Developer & Problem Solver",
                2000,
                "Frontend Developer & Coding Enthusiast",
                2000,
              ]}
              speed={40}
              className={styles.typer}
              repeat={Infinity}
            />
          </div>
          <p className={styles.para}>
            "Hi, I’m Kashif Ali, a Frontend Developer and Graphic Designer
            passionate about creating Modern, Responsive, and Visually
            Captivating Websites. I focus on delivering seamless user
            experiences and bringing creative ideas to life. Let’s work together
            to make something extraordinary!"
          </p>
          <div className={styles.socialIcons}>
            <a href={Cv} target="_blank" className={styles.button}>
              <span className={`${styles.corner} ${styles.cornerTopRight}`}>
                <span className={styles.innerSquare} />
              </span>
              <span className={`${styles.corner} ${styles.cornerBottomLeft}`}>
                <span className={styles.innerSquare} />
              </span>
              <span className={styles.hoverEffect} />
              <span className={styles.text}>Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kashif-alyy-803419309/"
              target="_blank"
              className={styles.icons}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/kashifali875v"
              target="_blank"
              className={styles.icons}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/Kashifalii"
              target="_blank"
              className={styles.icons}
            >
              <FiGithub />
            </a>
          </div>
        </div>
        <div
          className={styles.imgWrap}
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <img src={img1} loading="lazy" alt="header image" />
        </div>
      </div>
    </div>
  );
}

export default Header;
