import items from "../../data/NavItems.json";
import styles from "./FooterNavItems.module.css";
import Link from "next/link";

const FooterNavItems = () => {
  return (
    <div className={styles["footer-nav__list"]}>
      {items.map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            <a className={styles["footer-nav__link"]}> {item.title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterNavItems;
