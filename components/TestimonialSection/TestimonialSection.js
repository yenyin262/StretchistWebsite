import styles from "./TestimonialSection.module.css";
import TestimonialItem from "../TestimonialItem/TestimonialItem";

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.testimonialHeading}>Client Testimonials</h3>
      <div className={styles.testimonialContent_blk}>
        {testimonials.map((testimonial, index) => {
          return <TestimonialItem data={testimonial} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
