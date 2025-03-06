import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../emailCard/contact.module.css";

export const ContactCard = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5v7b0is", "template_gnlv5rg", form.current, {
        publicKey: "VIjfhcyEQhAe8UqX2",
      })
      .then(
        () => {
          alert("SUCCESS! Your message has been sent.");
        },
        (error) => {
          alert("FAILED! Please try again.");
        },
      );
  };

  return (
    <div className={styles.formContainer}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Messanger Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Messanger Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="textarea" className={styles.label}>
            How Can I Help You?
          </label>
          <textarea
            name="message"
            id="textarea"
            rows="10"
            cols="50"
            className={styles.textarea}
            required
          />
        </div>
        <button type="submit" className={styles.formSubmitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};
