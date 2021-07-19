import Link from "next/link";
import styles from "./NavBar.module.css";
import logo from "../../public/logo.svg";
import togglebtn from "../../public/icon-hamburger.svg";
import Image from "next/image";

import { useState } from "react";

const NavBar = () => {
  // set state of the menu icon
  const [click, setClick] = useState(false);

  // create function to click on menu icon
  const handleClick = () => {
    setClick(!click);
  };
  // create function to close menu icon when selecting a menu item
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={40} />
        </Link>
      </div>
      <div className={styles.togglebtn} onClick={handleClick}>
        <Link href="/">
          <Image src={togglebtn} alt="Menu icon" width={30} height={20} />
        </Link>
      </div>
      <div className={styles.navBarLinks}>
        <div>
          <Link href="/about" onClick={closeMobileMenu}>
            <a className={styles.link}> About</a>
          </Link>
        </div>
        <div className={styles.servicesContainer}>
          <Link href="" onClick={closeMobileMenu}>
            <a className={styles.link}>Services</a>
          </Link>
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
