import Image from "next/image";
import styles from "./TestimonialItem.module.css";
import PropTypes from "prop-types";

const TestimonialItem = ({ data }) => {
  return (
    <div className={styles.testimonial__item}>
      <div className={styles.testimonial__imgContainer}>
        <Image
          className={styles.testimonial__img}
          src={data.image}
          width={80}
          height={80}
          alt={data.alt}
        />
      </div>
      <div className={styles.testimonial__item__name}>{data.name}</div>
      <div className={styles.testimonial__item__position}>{data.position}</div>

      <div className={styles.testimonial__item__content}>{data.content}</div>
    </div>
  );
};

export default TestimonialItem;

TestimonialItem.propTypes = {
  data: PropTypes.object,
};
