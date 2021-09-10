import styles from "./HeroImage.module.css";
import classnames from "classnames";
import Image from "next/Image";
const HeroImage = ({ children, heroImage, title, subtitle }) => {
  return (
    <>
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
            <Image
              src={heroImage}
              width={400}
              height={500}
              alt="thestretchist"
            />
          </div>
          <div className={styles.hero__heading}>
            <h1>{title}</h1>
            <h3 style={{ color: "hsl(156deg 50% 48%)" }}>{subtitle}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
