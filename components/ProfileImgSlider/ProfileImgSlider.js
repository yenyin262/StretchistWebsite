import Image from "next/image";
import { useState } from "react";
import styles from "./ProfileImgSlider.module.css";
import PropTypes from "prop-types";

const ProfileImgSlider = ({ images, content }) => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.aboutContent}>
      <div className={styles.profileImage}>
        <div style={{ marginBottom: "10px" }}>
          <Image
            className={styles.aboutImg}
            src={images[active].src}
            alt={images[active].alt}
            width={350}
            height={350}
          />
        </div>
        <div className={styles.slider}>
          {images.map((profileImage, index) => {
            return (
              <Image
                key={index}
                src={profileImage.src}
                alt={profileImage.alt}
                width={55}
                height={55}
                className={
                  index === active ? `${styles.active}` : `${styles.sliderItem}`
                }
                onClick={() => {
                  setActive(index);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

export default ProfileImgSlider;

ProfileImgSlider.propTypes = {
  images: PropTypes.array,
  content: PropTypes.string,
};
