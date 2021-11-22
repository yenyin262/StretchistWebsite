import styles from "./ImgCollageSection.module.css";
import ImgItem from "../ImgItem/ImgItem";
import PropTypes from "prop-types";

const ImgCollageSection = ({ imgCollages }) => {
  return (
    <div className={styles.imgCollage}>
      {imgCollages.map((imgCollage, index) => {
        return <ImgItem data={imgCollage} key={index} />;
      })}
    </div>
  );
};

export default ImgCollageSection;

ImgCollageSection.propTypes = {
  imgCollages: PropTypes.array,
};
