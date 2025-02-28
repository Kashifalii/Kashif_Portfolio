import React from "react";
import styles from "../pages/footer.module.css";
import { ContactCard } from "../emailCard/ContactCard";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

function Footer() {
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.textWrapper} data-aos="fade-right">
        <h1 className={styles.title}>
          <span>|</span> contact me
        </h1>
        <p className={styles.tagline}>
          I’m <span>Just a Message</span> Away —Reach <span>Out Today!</span>
        </p>
        <p className={styles.para}>
          Have questions or a project in mind? I'm just a message away. Reach
          out today, and let’s discuss how I can assist you with top-quality web
          solutions.
        </p>
        <hr className={styles.lineBreak} />
        <ul className={styles.contactList}>
          <li>
            <span>
              <FaMapLocationDot />
            </span>
            3rd Street, Muhammad Abad Danyore, Gilgit
          </li>
          <li>
            <span>
              <MdWifiCalling3 />
            </span>
            03554435041 - 03460718860
          </li>
          <li>
            <span>
              <MdAlternateEmail />
            </span>
            alyyk82@gmail.com
          </li>
        </ul>
      </div>
      <div className={styles.formWrapper} data-aos="fade-left">
        <ContactCard />
      </div>
    </div>
  );
}

export default Footer;
