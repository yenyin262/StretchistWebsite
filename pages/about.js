import styles from "../styles/about.module.css";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import { getAboutPage } from "../lib/api";
import ProfileImgSlider from "../components/ProfileImgSlider/ProfileImgSlider";
import { useInView } from "react-intersection-observer";

const About = ({ preview, coreValues, myExperience, title, aboutSection }) => {
  const { ref, inView } = useInView({ rootMargin: "-100px 0px 0px 0px" });

  const { ref: footerref, inView: footerinView } = useInView({});
  return (
    <>
      <Layout
        navBgColor="#e0f2f1"
        navLinkColor="#1d5d44"
        preview={preview}
        showDrawerTab={!footerinView}
        hasDrawerTab={true}
        isNavBarFilled={false}
        isNavBarScrolled={!inView}
        stickyNavBar
      >
        <div ref={ref} style={{ paddingTop: "100px" }}>
          <h1 className={styles.aboutme_mainheading}>{title}</h1>
        </div>
        <div className={styles.imgContainer}>
          <ProfileImgSlider
            images={aboutSection.images}
            content={aboutSection.content}
          />
        </div>

        <div className={styles.contentContainer}>
          <h2 className={styles.corevalues__subheading}>{coreValues.title}</h2>
          <div className={styles.corevalue__list}>
            {coreValues.values.map((value, index) => {
              return (
                <div key={index} className={styles.corevalueItem}>
                  <Image
                    src={value.image}
                    height={100}
                    width={100}
                    alt={value.alt}
                  />
                  <div className={styles.corevalue__label}>{value.label}</div>
                  <div className={styles.description}>{value.description}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.experienceContentContainer}>
          <h2 className={styles.myexperience__subheading}>
            {myExperience.title}
          </h2>
          <div className={styles.myexperience__list}>
            {myExperience.values.map((value, index) => {
              return (
                <div className={styles.myexperienceItem} key={index}>
                  <h2 className={styles.numbers}>{value.numbers}</h2>
                  <div className={styles.myexperience__label}>
                    {value.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div ref={footerref}></div>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps({ preview = false }) {
  const { coreValues, myExperience, title, aboutSection } = await getAboutPage({
    preview,
  });

  return {
    props: {
      coreValues,
      myExperience,
      title,
      aboutSection,
      preview,
    },
  };
}
