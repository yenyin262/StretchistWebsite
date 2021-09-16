import classnames from "classnames";
import styles from "./SocialSectionItem.module.css";

const SocialSectionItem = ({ data }) => {
  return (
    <>
      <style jsx>{`
        .img {
          background-image: url("${data.image}");
        }
      `}</style>
      <div className={classnames(`img`, styles.item)}>
        <div className={styles.item__body}>
          <div className={styles.item__title}>{data.title}</div>
          <div className={styles.item__content}>{data.content}</div>
        </div>
      </div>
    </>
  );
};

export default SocialSectionItem;
