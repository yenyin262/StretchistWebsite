import styles from "./Footer.module.css";
import Logo from "../Logo";
import FooterNavItems from "../FooterNavItems/FooterNavItems";

import Icons from "../Icons/Icons";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div>
        <FooterNavItems />
      </div>
      <div className={styles.socialMediaIcons}>
        {" "}
        <Icons />{" "}
      </div>
    </div>
  );
};

export default Footer;
