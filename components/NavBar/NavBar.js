import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";
import NavItems from "../NavItems/NavItems";
import MobileMenu from "../MobileMenu/MobileMenu";
import useMobilenavmenu from "./useMobilenavmenu";
import ToggleButton from "../ToggleButton/ToggleButton";
import classNames from "classnames";
import PropTypes from "prop-types";
import logo from "../../public/StretchistFinal.svg";
import CloseIcon from "../CloseIcon/CloseIcon";

const NavBar = ({
  isScrolled,
  navLinkColor,
  isNavLinkFilled,
  navBgColor = "#e0f2f1",
  sticky = false,
}) => {
  const { ref, mobileNavmenu, setMobileNavmenu } = useMobilenavmenu(false);

  return (
    <div
      style={{ background: navBgColor }}
      className={classNames(
        styles["main-nav"],
        { [styles["sticky"]]: sticky },
        {
          [styles["scrolled"]]: isScrolled,
        }
      )}
    >
      <div className={styles["main-nav__logo"]}>
        <Link href="/">
          <a>
            {/* <Image
            src={logo}
            alt="Logo"
            layout="responsive"
            width={180}
            height={40}
          /> */}

            <Image
              src={logo}
              // src="/TheStretchistLogo.png"
              alt="Logo"
              layout="responsive"
              width={200}
              height={135}
              // width={25}
              // height={17}
              color={"black"}
            />
          </a>
        </Link>
      </div>
      <div ref={ref}>
        <button
          className={styles.togglebutton}
          onClick={() => setMobileNavmenu(!mobileNavmenu)}
        >
          {!mobileNavmenu ? <ToggleButton /> : <CloseIcon />}
        </button>

        {mobileNavmenu && <MobileMenu />}
      </div>

      <NavItems linkColor={navLinkColor} isFilled={isNavLinkFilled} />
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  isScrolled: PropTypes.bool,
  sticky: PropTypes.bool,
};
