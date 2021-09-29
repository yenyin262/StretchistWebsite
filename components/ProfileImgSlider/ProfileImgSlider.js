import Image from "next/image";
import { useState } from "react";
import styles from "./ProfileImgSlider.module.css";

const ProfileImgSlider = ({ profileImages, img, content }) => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.aboutContent}>
      {/* <Image className={styles.aboutImg} src={img} width={350} height={350} /> */}
      <div className={styles.profileImage}>
        <div style={{ marginBottom: "10px" }}>
          <Image
            className={styles.aboutImg}
            src={profileImages[active].image}
            width={350}
            height={350}
          />
        </div>
        <div className={styles.slider}>
          {profileImages.map((profileImage, index) => {
            return (
              <div>
                <Image
                  src={profileImage.image}
                  width={55}
                  height={55}
                  className={
                    index === active
                      ? `${styles.active}`
                      : `${styles.sliderItem}`
                  }
                  onClick={() => {
                    setActive(index);
                  }}
                />
              </div>
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
