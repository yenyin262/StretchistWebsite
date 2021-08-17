import Link from "next/link";
import styles from "./NavBar.module.css";
import logo from "../../public/logo.svg";
import Image from "next/image";
import NavItems from "../NavItems/NavItems";
import MobileMenu from "../MobileMenu/MobileMenu";
import useMobilenavmenu from "./useMobilenavmenu";
import ToggleButton from "../ToggleButton/ToggleButton";

const NavBar = () => {
  const { ref, mobileNavmenu, setMobileNavmenu } = useMobilenavmenu(false);

  return (
    <div className={styles["main-nav"]}>
      <div className={styles["main-nav__logo"]}>
        <Link href="/">
          {/* <Image
            src={logo}
            alt="Logo"
            layout="responsive"
            width={180}
            height={40}
          /> */}

          <Image
            src="/TheStretchistLogo.png"
            alt="Logo"
            layout="responsive"
            width={700}
            height={378}
            color={"black"}
          />
        </Link>
      </div>
      <div ref={ref}>
        <button
          className={styles.togglebutton}
          onClick={() => setMobileNavmenu(!mobileNavmenu)}
        >
          <ToggleButton />
        </button>

        {mobileNavmenu && <MobileMenu />}
      </div>

      <NavItems />
    </div>
  );
};

export default NavBar;
