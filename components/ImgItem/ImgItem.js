import Image from "next/image";
import styles from "./ImgItem.module.css";

const ImgItem = ({ data }) => {
  return (
    <div className={styles.imageCollage__item}>
      <Image
        src={data.mobile}
        alt={data.altDescription}
        width={376}
        height={376}
        layout="responsive"
      />
    </div>
  );
};

export default ImgItem;
