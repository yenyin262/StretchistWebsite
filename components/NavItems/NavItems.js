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
        href="https://calendly.com/thestretchist/book-your-session?fbclid=IwAR0NX0pjoBOm9jYY51qkMHu2lwNtfncb6yWV2vGmwTSKvtNrJ21k6D65XCg"
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
