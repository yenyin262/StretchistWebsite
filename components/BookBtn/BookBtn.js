import React from "react";
import styles from "./BookBtn.module.css";

export default function BookBtn() {
  return (
    <div className={styles[`book-btn`]}>
      <a
        href="https://calendly.com/thestretchist/book-your-session"
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Book Now
      </a>
    </div>
  );
}
