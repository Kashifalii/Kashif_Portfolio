import React from "react";
import styles from "../pages/navbar.module.css";
import { ImHome } from "react-icons/im";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <a href="#">
          <ImHome />
        </a>
        <span>home</span>
      </li>
      <li>
        <a href="#about">
          <BsPersonLinesFill />
        </a>
        <span>About</span>
      </li>
      <li>
        <a href="#skill">
          <FaLaptopCode />
        </a>
        <span>skills</span>
      </li>
      <li>
        <a href="#portfolioSection">
          <MdWorkHistory />
        </a>
        <span>Portfolio</span>
      </li>
      <li>
        <a href="#contact">
          <FaPhoneVolume />
        </a>
        <span>Contact</span>
      </li>
    </ul>
  );
}

export default Navbar;
