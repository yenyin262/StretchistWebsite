import styles from "./Footer.module.css";
import Logo from "../Logo";
import FooterNavItems from "../FooterNavItems/FooterNavItems";

import Icons from "../Icons/Icons";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <FooterNavItems />
        <div className={styles.socialMediaIcons}>
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
