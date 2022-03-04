import styles from "./HeroImage.module.css";
import classnames from "classnames";
import Image from "next/image";

import PropTypes from "prop-types";
const HeroImage = ({ children, heroImage, title, subtitle }) => {
  return (
    <>
      <style jsx>{`
        .heroImage {
          background-image: url("${heroImage}");
        }
      `}</style>

      <div className={classnames(`heroImage`, styles.hero)}>
        {children}
        <div className={styles.hero__content}>
          {/* <div className={styles.hero__image}>
            <Image
              src={heroImage}
              width={500}
              height={500}
              alt="thestretchist"
              className={styles.img}
            />
          </div> */}
          <div className={classnames(`heroImgBgd`)}>
            <h1 className={styles.hero__heading}>{title}</h1>
            <h3 className={styles.subtitle}>{subtitle}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;

HeroImage.propTypes = {
  children: PropTypes.object,
  heroImage: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
