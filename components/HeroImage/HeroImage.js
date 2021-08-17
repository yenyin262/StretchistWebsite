import styles from "./HeroImage.module.css";
import heroImagedata from "../../data/heroImageData.json";
import classnames from "classnames";
import HeroArrow from "../HeroArrow/HeroArrow";
import Image from "next/Image";
const HeroImage = ({ children }) => {
  return (
    <>
      {/* <style jsx>{`
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
      `}</style> */}

      <style jsx>{`
        @media (max-width: 400px) {
          .heroImage {
            background: #112b24;
          }
        }
        @media (min-width: 400px) {
          .heroImage {
            background: #112b24;
          }
        }
      `}</style>

      <div className={classnames(`heroImage`, styles.hero)}>
        {children}
        <div className={styles.hero__content}>
          {/* <Image src="/logo2.png" width={375} height={146} /> */}
          {/* <h1 className={styles.hero__content_title}>We are creatives</h1>
          <HeroArrow /> */}
          <h1 style={{ color: "white" }}>Assisted Stretch Therapy</h1>
          <h3 style={{ color: "hsl(156deg 50% 48%)" }}>with Gaby Chin</h3>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
