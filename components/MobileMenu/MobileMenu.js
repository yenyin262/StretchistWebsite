import NavItems from "../NavItems/NavItems";
import styles from "./MobileMenu.module.css";
import items from "../../data/NavItems.json";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className={styles.mobilemenu__nav}>
      {items.map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            <a className={styles.mobilemenu__nav__link}> {item.title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileMenu;
