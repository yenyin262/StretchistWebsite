import styles from "./HeroImage.module.css";
import heroImagedata from "../../data/heroImageData.json";
import classnames from "classnames";
import HeroArrow from "../HeroArrow/HeroArrow";
const HeroImage = ({ children }) => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 400px) {
          .heroImage {
            background-image: url("${heroImagedata.images.mobile}");
          }
        }
        @media (min-width: 400px) {
          .heroImage {
            background-image: url("${heroImagedata.images.desktop}");
          }
        }
      `}</style>

      <div className={classnames(`heroImage`, styles.hero)}>
        {children}
        <div className={styles.hero__content}>
          <h1 className={styles.hero__content_title}>We are creatives</h1>
          <HeroArrow />
        </div>
      </div>
    </>
  );
};

export default HeroImage;
