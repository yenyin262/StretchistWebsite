import Link from "next/link";
import styles from "./NavBar.module.css";
import logo from "../../public/logo.svg";
import togglebtn from "../../public/icon-hamburger.svg";
import Image from "next/image";
import NavItems from "../NavItems/NavItems";
import MobileMenu from "../MobileMenu/MobileMenu";
import useMobilenavmenu from "./useMobilenavmenu";
import HeroImage from "../HeroImage/HeroImage";

const NavBar = () => {
  const { ref, mobileNavmenu, setMobileNavmenu } = useMobilenavmenu(false);

  // test the bug on the onlcick fn
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            layout="responsive"
            width={180}
            height={40}
          />
        </Link>
      </div>
      <div className={styles.togglebtn} ref={ref}>
        <button
          className={styles.btn_menu}
          onClick={() => setMobileNavmenu(!mobileNavmenu)}
        >
          <Image src={togglebtn} alt="Menu icon" width={30} height={20} />
        </button>

        {mobileNavmenu && (
          <div>
            <MobileMenu />
          </div>
        )}
      </div>

      <NavItems />
    </div>
  );
};

export default NavBar;
