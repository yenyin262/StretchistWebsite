import { getJSONStretchData } from "../lib/stretch";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import styles from "../styles/joinus.module.css";
import { getJoinUsPage } from "../lib/api";
import { useInView } from "react-intersection-observer";
// qm to as stas when calling hook do we still need the inView?
const JoinUs = ({ heading, videoClip, whyStretchSection, preview }) => {
  const { ref, inView } = useInView({
    rootMargin: "-100px 0px 0px 0px",
  });
  const { ref: footerref, inView: footerinView } = useInView({});

  return (
    <div className={`Container`}>
      <Layout
        preview={preview}
        isNavBarScrolled={!inView}
        isNavBarFilled={true}
        stickyNavBar
        showDrawerTab={!footerinView}
        hasDrawerTab={true}
        navLinkColor="#000"
        navBgColor={inView ? "transparent" : "rgb(224, 242, 241)"}
      >
        <div ref={ref} className={styles["stretchfacts-test"]}>
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
        <div ref={footerref}></div>
      </Layout>
    </div>
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
