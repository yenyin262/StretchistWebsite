import { getJSONStretchData } from "../lib/stretch";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import styles from "./JoinUs.module.css";
const JoinUs = ({ title, facts, heading }) => {
  return (
    <Layout>
      <div className={styles["stretchfacts-test"]}>
        <h3 className={styles.heading}>{heading}</h3>
        <video loop autoPlay className={styles.video}>
          <source src="/vid_two.webm" type="video/webm" />
          Sorry, your browser doesnt support embedded videos.
        </video>
      </div>
      <div
        style={{
          padding: "60px 0 ",
          textAlign: "center",
          backgroundColor: "#fffff",
        }}
      >
        <h1> {title}</h1>
      </div>

      <div>
        {facts.map((fact, index) => {
          return (
            <div key={index} className={styles["stretchfacts-list"]}>
              <div className={styles.stretchItem}>
                <div className={styles["stretchfacts-img_card"]}>
                  <Image
                    src={fact.image}
                    alt={fact.altDescription}
                    width={400}
                    height={220}
                    layout="responsive"
                    className={styles.img}
                  />
                </div>
                <div className={styles["stretch-content"]}>
                  <div className={styles.item}>
                    <h3 className={styles["stretch-content_title"]}>
                      {fact.title}
                    </h3>
                    <p className={styles["stretch-content_content"]}>
                      {fact.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default JoinUs;

export async function getStaticProps() {
  const { title, facts, heading } = getJSONStretchData();

  return {
    props: { title, facts, heading },
  };
}
