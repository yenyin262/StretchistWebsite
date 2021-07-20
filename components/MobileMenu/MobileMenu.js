import NavItems from "../NavItems/NavItems";
import styles from "./MobileMenu.module.css";
import items from "../../data/NavItems.json";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className={styles.container_mobileMenu}>
      <div className={`${[styles.navBarLinks]}`}>
        {items.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <a className={styles.link}> {item.title}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
