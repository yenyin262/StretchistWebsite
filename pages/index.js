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

const Home = ({ sections, secondarySections, testimonials, imgCollages }) => {
  return (
    <>
      <div>
        <HeroImage>
          <NavBar />
        </HeroImage>
        <div>
          {sections.map((section, index) => (
            <>
              <style jsx>{`
                @media (max-width: 400px) {
                  a {
                    padding: 30px 0 8px;
                    position: relative;
                  }

                  a::before {
                    content: "";
                    position: absolute;
                    left: 65px;
                    bottom: 10px;
                    width: 130px;
                    height: 7px;
                    transform: skew(-12deg) translateX(-50%);
                    background: ${section.linkColor};
                    z-index: -1;
                  }
                }

                @media (min-width: 400px) {
                  .detailsblk {
                  }
                }
              `}</style>
              <div key={index} className={styles.content1_container}>
                {/* <div className={styles.content1Item}> */}
                <div className={styles.content1_imgContainer}>
                  <Image
                    src={section.image}
                    alt="dd"
                    width={370}
                    height={370}
                  />
                </div>
                <div className={styles.mainContent_block}>
                  <div className={styles.title}>{section.title}</div>
                  <div className={styles.content}>{section.content}</div>
                  <div className={styles.content_btn}>
                    <Link href="/about">
                      <a>{section.details}</a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </>
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
            return (
              <div key={index} className={styles.testimonialItemContainer}>
                <div>
                  <Image
                    className={styles.testimonialImg}
                    src={testimonial.image}
                    width={80}
                    height={80}
                  />
                </div>

                <div className={styles.testimonialContent}>
                  {testimonial.content}
                </div>
                <div className={styles.name}>{testimonial.name}</div>
                <div className={styles.position}>{testimonial.position}</div>
              </div>
            );
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
