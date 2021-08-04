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
      <div ref={ref}>
        <button
          className={styles.btn_menu}
          onClick={() => setMobileNavmenu(!mobileNavmenu)}
        >
          <ToggleButton />
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
