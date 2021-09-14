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
    link: "/JoinUs",
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
                "nav-link-dynamic-color"
              )}
            >
              {" "}
              {item.title}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
