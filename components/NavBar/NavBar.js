import Link from "next/link";
import styles from "./NavBar.module.css";
import logo from "../../public/logo.svg";
import togglebtn from "../../public/icon-hamburger.svg";
import Image from "next/image";

import { useState } from "react";
import NavItems from "../NavItems/NavItems";

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
        <Image
          src={logo}
          alt="Logo"
          layout="responsive"
          width={180}
          height={40}
        />
      </div>
      <div className={styles.togglebtn} onClick={handleClick}>
        <Link href="/">
          <Image src={togglebtn} alt="Menu icon" width={30} height={20} />
        </Link>
      </div>
      <NavItems />
    </div>
  );
};

export default NavBar;
