// import items from "../../data/NavItems.json";
import styles from "./Navitems.module.css";
import Link from "next/link";
import classNames from "classnames";

const navItems = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: " Join us",
    link: "/joinus",
  },

  { title: "Contact", link: "/contact" },
];

const NavItems = () => {
  return (
    <div className={styles["main-nav__list"]}>
      {navItems.map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            <a
              className={classNames(
                styles["main-nav__link"],
                "nav-link-dynamic-color",
                "nav-joinus-link-dynamic-color"
              )}
            >
              {" "}
              {item.title}
            </a>
          </Link>
        );
      })}

      <a
        href={
          "https://l.facebook.com/l.php?u=https%3A%2F%2Fcalendly.com%2Fthestretchist%2Fbook-your-session%3Ffbclid%3DIwAR0NX0pjoBOm9jYY51qkMHu2lwNtfncb6yWV2vGmwTSKvtNrJ21k6D65XCg&h=AT1L1RsAspIbDkyR9_DRGi2N2xHVymrB2IzUfCXnWw5-vzABLa-4Bzfh3rg6GZOBFCRzOwlQi_Vb0JXHw4uMssYWS4TK2kTmti5VvJjIPqlnpdyE5tJ10SbSRWkYI4FF5bqfQDHG"
        }
        target="_blank"
        className={classNames(
          styles["main-nav__link"],
          "nav-link-dynamic-color",
          "nav-joinus-link-dynamic-color"
        )}
      >
        {" "}
        Book Now
      </a>
    </div>
  );
};

export default NavItems;
