import styles from "./Footer.module.css";
import Logo from "../../public/StretchistFinal.svg";
import FooterNavItems from "../FooterNavItems/FooterNavItems";
import Image from "next/image";

import Icons from "../Icons/Icons";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__logo}>
          <Image
            src={Logo}
            alt="Logo"
            layout="responsive"
            width={700}
            height={474}
          />
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
