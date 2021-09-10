import styles from "./about.module.css";
import Layout from "../components/Layout/Layout";
import { getJSONAboutData } from "../lib/about";
import Image from "next/Image";
const About = ({ coreValues, myExperience, heading }) => {
  return (
    <Layout>
      <div>
        <h1 className={styles.aboutme_mainheading}>{heading}</h1>

        <div>
          <h2 className={styles.corevalues__subheading}>{coreValues.title}</h2>
          <div className={styles.corevalue__list}>
            {coreValues.values.map((value, index) => {
              return (
                <div key={index} className={styles.corevalueItem}>
                  <Image
                    src={value.mobile}
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
  );
};

export default About;

// export async function getStaticProps() {
//   const { aboutMe } = getJSONAboutData();

//   return {
//     props: { aboutMe },
//   };
// }

export async function getStaticProps() {
  const { coreValues, myExperience, heading } = getJSONAboutData();

  return {
    props: { coreValues, myExperience, heading },
  };
}
