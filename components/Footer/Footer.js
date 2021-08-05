import styles from "./Footer.module.css";
import Logo from "../Logo";
import FooterNavItems from "../FooterNavItems/FooterNavItems";

import Icons from "../Icons/Icons";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__logo}>
          <Logo />
        </div>
        <FooterNavItems />
        <div>
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
