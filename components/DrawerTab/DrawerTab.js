import React from "react";
import styles from "./DrawerTab.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function DrawerTab({ show }) {
  return (
    <div
      // styles is an object "promo-tab" is the key
      className={classNames(styles["promo-tab"], {
        //name of the key is the classname
        // [] syntax to define the key of an object as a varaible ie. [styles["promo-tab"]]
        [styles["show"]]: show,
      })}
    >
      <a
        href="https://calendly.com/thestretchist/book-your-session"
        target="_blank"
        rel="noreferrer"
      >
        <button className={styles[`drawer-btn`]}>Book Now</button>
      </a>
    </div>
  );
}

DrawerTab.propTypes = {
  show: PropTypes.bool,
};
