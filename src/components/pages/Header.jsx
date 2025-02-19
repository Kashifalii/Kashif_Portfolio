import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import styles from "../pages/header.module.css";
import img1 from "../assets/images/header-img.webp";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

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
          <div className="socialIcons flex items-center gap-5">
            <Link className="group relative flex items-center overflow-hidden rounded-md bg-[#f4aa4fc9] px-6 py-3 font-medium transition-all">
              <span class="absolute top-0 right-0 inline-block h-4 w-4 rounded bg-[#f4ab4f] transition-all duration-500 ease-in-out group-hover:-mt-4 group-hover:-mr-4">
                <span class="absolute top-0 right-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-gray-300" />
              </span>
              <span class="absolute bottom-0 left-0 inline-block h-4 w-4 rotate-180 rounded bg-[#f4ab4f] transition-all duration-500 ease-in-out group-hover:-mb-4 group-hover:-ml-4">
                <span class="absolute top-0 right-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-gray-300" />
              </span>
              <span class="absolute bottom-0 left-0 h-full w-full -translate-x-full rounded-md bg-[#f4ab4f] transition-all duration-500 ease-in-out group-hover:translate-x-0" />
              <span class="relative w-full text-left text-base text-[14px] text-white transition-colors duration-200 ease-in-out group-hover:text-white sm:text-[16px]">
                Reach Out
              </span>
            </Link>
            <Link className={styles.icons}>
              <FaLinkedinIn className="text-sm sm:text-lg" />
            </Link>
            <Link className={styles.icons}>
              <FaFacebookF className="text-sm sm:text-lg" />
            </Link>
            <Link className={styles.icons}>
              <FiGithub className="text-sm sm:text-lg" />
            </Link>
          </div>
        </div>
        <div
          className={styles.imgWrap}
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <img src={img1} />
        </div>
      </div>
    </div>
  );
}

export default Header;
