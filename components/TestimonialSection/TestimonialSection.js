import styles from "./TestimonialSection.module.css";
import TestimonialItem from "../TestimonialItem/TestimonialItem";

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className={styles.testimonial}>
      <h3 className={styles.testimonial__heading}>{testimonials.heading}</h3>
      <div className={styles.testimonial__list}>
        {testimonials.values.map((value, index) => {
          return <TestimonialItem data={value} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
