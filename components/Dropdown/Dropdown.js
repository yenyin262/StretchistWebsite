import Link from "next/link";
import styles from "./Dropdown.module.css";
import { MenuItems } from "./DropdownItems";

import { useState } from "react";

import React from "react";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? `${styles.dropdownMenu} ${styles.clicked}`
            : styles.dropdownMenu
        }
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                // className={item.cName}
                href={item.path}
                onClick={() => setClick(false)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
