import styles from "./about.module.css";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import { getAboutPage } from "../lib/api";
import ProfileImgSlider from "../components/ProfileImgSlider/ProfileImgSlider";
const About = ({ preview, coreValues, myExperience, title, aboutSection }) => {
  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          :global(.nav-link-dynamic-color) {
            color: #1d5d44;
          }
        }
      `}</style>
      <Layout preview={preview}>
        <div>
          <h1 className={styles.aboutme_mainheading}>{title}</h1>

          <div>
            <div className={styles.imgContainer}>
              <ProfileImgSlider
                images={aboutSection.images}
                content={aboutSection.content}
              />
            </div>

            <h2 className={styles.corevalues__subheading}>
              {coreValues.title}
            </h2>

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
                    <div className={styles.description}>
                      {value.description}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
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
          </div>
        </div>
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
