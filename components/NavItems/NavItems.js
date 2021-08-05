import items from "../../data/NavItems.json";
import styles from "./Navitems.module.css";
import Link from "next/link";

const NavItems = () => {
  return (
    <div className={styles["main-nav__list"]}>
      {items.map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            <a className={styles["main-nav__link"]}> {item.title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
