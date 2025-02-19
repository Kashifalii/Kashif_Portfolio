import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../container/container";
import Header from "../pages/Header";
import styles from "../layout/layout.module.css";
import Navbar from "../pages/Navbar";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";

function Layout() {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS globally for animations
  }, []);

  return (
    <main className={`${styles.main} relative`}>
      <Container>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Portfolio />
      </Container>
    </main>
  );
}

export default Layout;
