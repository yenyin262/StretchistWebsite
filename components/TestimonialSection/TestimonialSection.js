import styles from "./TestimonialSection.module.css";
import TestimonialItem from "../TestimonialItem/TestimonialItem";
import PropTypes from "prop-types";

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className={styles.testimonial}>
      <h3 className={styles.testimonial__heading}>{testimonials.title}</h3>
      <div className={styles.testimonial__list}>
        {testimonials.values.map((value, index) => {
          return <TestimonialItem data={value} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;

TestimonialSection.propTypes = {
  testimonials: PropTypes.object,
};
