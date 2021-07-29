// import Head from "/next/head";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import classnames from "classnames";
import Link from "next/link";
import Image from "next/image";
import {
  getJSONSections,
  getJSONSecondarySections,
  getJSONtestimonials,
  getImageCollage,
} from "../lib/sections";
import HeroImage from "../components/HeroImage/HeroImage";
import styles from "./index.module.css";
import MainSection from "../components/MainSection/MainSection";
import TestimonialItem from "../components/TestimonialItem/TestimonialItem";

const Home = ({ sections, secondarySections, testimonials, imgCollages }) => {
  return (
    <>
      <div>
        <HeroImage>
          <NavBar />
        </HeroImage>
        <div>
          {sections.map((section, index) => (
            <MainSection data={section} key={index} />
          ))}
        </div>

        <div className={styles.content2_blk}>
          {secondarySections.map((secondarySection, index) => (
            <>
              <style jsx>{`
                @media (max-width: 400px) {
                  .img {
                    background-image: url("${secondarySection.mobileImage}");
                  }
                }

                @media (min-width: 400px) {
                  .img {
                    background-image: url("${secondarySection.desktopImage}");
                  }
                }
              `}</style>
              <div
                key={index}
                className={classnames(`img`, styles.secondaryContent_blk)}
              >
                <div className={styles.secondary_mainContent_block}>
                  <div className={styles.title}>{secondarySection.title}</div>
                  <div className={styles.content}>
                    {secondarySection.content}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <h3 className={styles.testimonialHeading}>Client Testimonial</h3>
        <div className={styles.testimonialContent_blk}>
          {testimonials.map((testimonial, index) => {
            return <TestimonialItem data={testimonial} key={index} />;
          })}
        </div>
        <div className={styles.imgCollageContainer}>
          {imgCollages.map((imgCollage, index) => {
            return (
              <div className={styles.imageCollage}>
                <Image
                  key={index}
                  src={imgCollage.mobile}
                  width={187}
                  height={210}
                  layout="responsive"
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const sections = getJSONSections();
  // geet secondary section
  // get testimonial
  const secondarySections = getJSONSecondarySections();
  const testimonials = getJSONtestimonials();

  const imgCollages = getImageCollage();
  console.log(sections);

  return {
    props: { sections, secondarySections, testimonials, imgCollages },
  };
}
