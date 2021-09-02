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
        @media (max-width: 768px) {
          .heroImage {
            background: #e0f2f1;
          }
        }
        @media (min-width: 1024px) {
          .heroImage {
            background: #ffff;
          }
        }
      `}</style>

      <div className={classnames(`heroImage`, styles.hero)}>
        {children}
        <div className={styles.hero__content}>
          <div className={styles.hero__image}>
            <Image src="/hero_img.png" width={400} height={500} />
          </div>
          <div className={styles.hero__heading}>
            <h1 style={{}}>Assisted Stretch Therapy</h1>
            <h3 style={{ color: "hsl(156deg 50% 48%)" }}>with Gaby Chin</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
