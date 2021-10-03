import styles from "./HeroImage.module.css";
import classnames from "classnames";
import Image from "next/image";
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
          <div className={classnames(`heroImgBgd`, styles.hero__heading)}>
            <h1>{title}</h1>
            <h3 style={{ color: "hsl(156deg 50% 48%)" }}>{subtitle}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
