import styles from "./FooterNavItems.module.css";
import Link from "next/link";

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
const FooterNavItems = () => {
  return (
    <div className={styles["footer-nav__list"]}>
      {navItems.map((item, index) => {
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
