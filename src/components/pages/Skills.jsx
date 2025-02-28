import styles from "../pages/skill.module.css";
import "aos/dist/aos.css";
import htmlImg from "../assets/images/icons/html.webp";
import cssImg from "../assets/images/icons/css.webp";
import bootImg from "../assets/images/icons/boot.webp";
import tailImg from "../assets/images/icons/tail.webp";
import jsImg from "../assets/images/icons/js.webp";
import reactImg from "../assets/images/icons/react.webp";
import psImg from "../assets/images/icons/ps.webp";
import farmerImg from "../assets/images/icons/framer.webp";
import dots from "../assets/images/dots.png";
import { GrTechnology } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { RiNpmjsLine } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { SiGooglefonts } from "react-icons/si";
import { SiPagespeedinsights } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { FaYarn } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";

const skills = [
  { name: "HTML 5", image: htmlImg, level: "90%" },
  { name: "CSS 3", image: cssImg, level: "90%" },
  {
    name: "Bootstrap",
    image: bootImg,
    level: "90%",
  },
  {
    name: "Tailwind",
    image: tailImg,
    level: "80%",
  },
  {
    name: "JavaScript",
    image: jsImg,
    level: "70%",
  },
  { name: "React", image: reactImg, level: "30%" },
  {
    name: "Framer",
    image: farmerImg,
    level: "70%",
  },
  {
    name: "Photoshop",
    image: psImg,
    level: "70%",
  },
];

const Skills = () => {
  return (
    <div className={styles.skillSec} id="skill">
      <div className={styles.textWrapper} data-aos="fade-up">
        <h1 className={styles.title}>
          <span>|</span> My Skills
        </h1>
        <p className={styles.tagline}>
          <span>Continuously Evolving</span>, Refining and Mastering{" "}
          <span>New Skills</span>
        </p>
        <img src={dots} alt="dots" className={styles.dots} />
        <p className={styles.para}>
          I believe in constant growth and regularly update my skills to stay
          ahead in the dynamic design industry. By learning new tools and
          techniques, I ensure my work remains innovative and relevant. This
          commitment allows me to deliver modern, high-quality designs tailored
          to client needs.
        </p>
        <div className={styles.tech}>
          <h1 className={styles.techTitle}>
            <span>
              <GrTechnology />
            </span>{" "}
            Tech stack I use
          </h1>
          <p className={styles.techTagline}>
            ––– Building with the best Modern, Efficient, Scalable Tech Stack.
          </p>
          <div className={styles.icons}>
            <VscVscode />
            <FiGithub />
            <RiVercelLine />
            <SiNetlify />
            <FaGitAlt />
            <FaNodeJs />
            <RiNpmjsLine />
            <SiVite />
            <FaYarn />
            <SiAxios />
            <FaFigma />
            <DiPhotoshop />
            <SiGooglefonts />
            <SiPagespeedinsights />
            <SiMui />
            <SiStyledcomponents />
            <FiCodesandbox />
          </div>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        {skills.map((skill, index) => (
          <div className={styles.card} data-aos="fade-in" key={index}>
            <div className={styles.content}>
              <div className={styles.back}>
                <div className={styles.backContent}>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className={styles.skillImage}
                    loading="lazy"
                  />
                  <strong className={styles.backTitle}>{skill.name}</strong>
                </div>
              </div>
              <div className={styles.front}>
                <div className={styles.frontContent}>
                  <small className={styles.badge}>Skill Level</small>
                  <div className={styles.percentage}>
                    <p>{skill.level}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
