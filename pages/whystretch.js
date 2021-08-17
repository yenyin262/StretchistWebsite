import stretchfacts from "../data/stretchfacts.json";
import Image from "next/Image";
import Layout from "../components/Layout/Layout";
import styles from "./whystretch.module.css";
const whystretch = () => {
  return (
    <Layout>
      <h3 className={styles.heading}>
        Stretch with us for an ultimate experience
      </h3>
      <div className={styles["stretchfacts-list"]}>
        <div className={styles["stretchfacts-img_card"]}>
          <video
            style={{ width: "100%" }}
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => {
              event.target.currentTime = 0;
              event.target.pause();
            }}
          >
            <source src="/output.webm" type="video/webm" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <div className={styles["stretchfacts-img_card"]}>
          <Image
            src="/gaby2.png"
            width={400}
            height={220}
            layout="responsive"
            className={styles.img}
          />
        </div>
        <div className={styles["stretchfacts-img_card"]}>
          <Image
            src="/gaby2.png"
            width={400}
            height={220}
            layout="responsive"
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <h3 className={styles["stretch-content_title"]}>
          Spearheaded by a Stretch Guru
        </h3>
        <p className={styles["stretch-content_content"]}>
          You're probably asking- why should I let someone stretch me? Allowing
          us to stretch enables you to experience a deeper and safer stretch
          that builds up your flexibility.
        </p>
      </div>
      <div>
        {stretchfacts.map((fact, index) => {
          return (
            <div key={index} className={styles["stretchfacts-list"]}>
              <div className={styles["stretchfacts-img_card"]}>
                <Image
                  src={fact.mobileImage}
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
          );
        })}
      </div>
    </Layout>
  );
};

export default whystretch;
