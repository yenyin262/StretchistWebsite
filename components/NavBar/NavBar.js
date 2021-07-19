import Link from "next/link";
import styles from "./NavBar.module.css";
import logo from "../../public/logo.svg";
import togglebtn from "../../public/icon-hamburger.svg";
import closeIcon from "../../public/close_icon.png";
import dropdownBtn from "../../public/down-arrow.png";
import Image from "next/image";

import { useState } from "react";
import Dropdown from "../Dropdown/dropdown";

const NavBar = () => {
  // set state of the menu icon
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // create function to click on menu icon
  const handleClick = () => {
    setClick(!click);
  };
  // create function to close menu icon when selecting a menu item
  const closeMobileMenu = () => {
    setClick(false);
  };

  // const onToggle = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onToggleLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={40} />
        </Link>
      </div>
      <div className={styles.togglebtn} onClick={handleClick}>
        <Link href="/">
          <Image
            src={click ? closeIcon : togglebtn}
            alt="togglebutton"
            width={30}
            height={20}
          />
        </Link>
      </div>
      <div className={styles.navBarLinks}>
        <div>
          <Link href="/about" onClick={closeMobileMenu}>
            <a className={styles.link}> About</a>
          </Link>
        </div>
        <div
          className={styles.servicesContainer}
          // onMouseEnter={onToggle}
          // onMouseLeave={onToggleLeave}
        >
          <Link href="" onClick={closeMobileMenu}>
            <a className={styles.link}>Services</a>
          </Link>
          <Image src={dropdownBtn} alt="btn" width={40} height={40} />
          {dropdown && <Dropdown />}
        </div>
        <div>
          <Link href="/about" onClick={closeMobileMenu}>
            <a className={styles.link}> Project</a>
          </Link>
        </div>
        <div>
          <Link href="/contact" onClick={closeMobileMenu}>
            <a className={styles.link}> Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
