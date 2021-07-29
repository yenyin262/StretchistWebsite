import Image from "next/image";
import styles from "./TestimonialItem.module.css";

const TestimonialItem = ({ data }) => {
  return (
    <div className={styles.testimonialItemContainer}>
      <div>
        <Image
          className={styles.testimonialImg}
          src={data.image}
          width={80}
          height={80}
        />
      </div>

      <div className={styles.testimonialContent}>{data.content}</div>
      <div className={styles.name}>{data.name}</div>
      <div className={styles.position}>{data.position}</div>
    </div>
  );
};

export default TestimonialItem;
