import classnames from "classnames";
import styles from "./SocialSectionItem.module.css";
import PropTypes from "prop-types";
import Image from "next/image";

const SocialSectionItem = ({ data }) => {
  return (
    <>
      <style jsx>{`
        .img {
          background-image: url("${data.image}");
        }
      `}</style>

      <div className={styles.wrapper}>
        <div className={styles.zoom_effect_container}>
          <div className={styles.image_card}>
            <Image
              src={data.image}
              alt="social image"
              layout="responsive"
              height={450}
              width={600}
              className={styles.img}
            />

            <div className={styles.item__body}>
              <div className={styles.item__title}>{data.title}</div>
              <div className={styles.item__content}>{data.content}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSectionItem;

SocialSectionItem.propTypes = {
  data: PropTypes.object,
};
