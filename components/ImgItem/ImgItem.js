import Image from "next/image";
import styles from "./ImgItem.module.css";
import PropTypes from "prop-types";

const ImgItem = ({ data }) => {
  return (
    <div className={styles.imageCollage__item}>
      <Image
        src={data.image}
        alt={data.altDescription}
        width={376}
        height={376}
        layout="responsive"
      />
    </div>
  );
};

export default ImgItem;

ImgItem.propTypes = {
  data: PropTypes.object,
};
