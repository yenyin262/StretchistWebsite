import stretchfacts from "../data/stretchfacts.json";
import Image from "next/Image";
import Layout from "../components/Layout/Layout";
import styles from "./whystretch.module.css";
const whystretch = () => {
  return (
    <Layout>
      <div className={styles["stretchfacts-test"]}>
        <h3 className={styles.heading}>
          Stretch with us for an ultimate experience
        </h3>
        <div className={styles["stretchfacts-img_card_test"]}>
          <video loop autoPlay style={{ width: "100%" }}>
            <source src="/vid_two.webm" type="video/webm" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
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
