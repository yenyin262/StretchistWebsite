import { getJSONStretchData } from "../lib/stretch";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import styles from "./joinus.module.css";
import { getJoinUsPage } from "../lib/api";
const JoinUs = ({ heading, videoClip, whyStretchSection, preview }) => {
  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          :global(.joinUsContainer) {
            position: absolute;
            width: 100%;
          }
          :global(.nav-joinus-link-dynamic-color) {
            color: #e8f0f2;
            background-color: hsl(156deg 50% 48% / 40%);
            border-radius: 50px;
          }
        }
      `}</style>
      <div className={`Container`}>
        <Layout preview={preview}>
          <div className={styles["stretchfacts-test"]}>
            <h3 className={styles.heading}>{heading}</h3>
            <video loop autoPlay className={styles.video}>
              <source src={videoClip} type="video/webm" />
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
            <h1> {whyStretchSection.title}</h1>
          </div>

          <div>
            {whyStretchSection.facts.map((fact, index) => {
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
      </div>
    </>
  );
};

export default JoinUs;

export async function getStaticProps({ preview = false }) {
  const { heading, whyStretchSection, videoClip } = await getJoinUsPage({
    preview,
  });

  return {
    props: { heading, whyStretchSection, videoClip, preview },
  };
}
