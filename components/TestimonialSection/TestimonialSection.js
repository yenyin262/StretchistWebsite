import styles from "./TestimonialSection.module.css";
import TestimonialItem from "../TestimonialItem/TestimonialItem";

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className={styles.testimonial}>
      <h3 className={styles.testimonial__heading}>Client Testimonials</h3>
      <div className={styles.testimonial__list}>
        {testimonials.map((testimonial, index) => {
          return <TestimonialItem data={testimonial} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
