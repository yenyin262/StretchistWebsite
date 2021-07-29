import items from "../../data/NavItems.json";
import styles from "./FooterNavItems.module.css";
import Link from "next/link";

const FooterNavItems = () => {
  return (
    <div className={styles.navBarLinks}>
      {items.map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            <a className={styles.link}> {item.title}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterNavItems;
