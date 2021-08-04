import styles from "./ImgCollageSection.module.css";
import ImgItem from "../ImgItem/ImgItem";

const ImgCollageSection = ({ imgCollages }) => {
  return (
    <div className={styles.imgCollageContainer}>
      {imgCollages.map((imgCollage, index) => {
        return <ImgItem data={imgCollage} key={index} />;
      })}
    </div>
  );
};

export default ImgCollageSection;
