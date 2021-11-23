import React from "react";
import styles from "./BookBtn.module.css";

export default function BookBtn() {
  return (
    <div className={styles[`book-btn`]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Book Now
    </div>
  );
}
