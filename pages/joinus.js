import { getJSONStretchData } from "../lib/stretch";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import styles from "../styles/joinus.module.css";
import { getJoinUsPage } from "../lib/api";
import { useInView } from "react-intersection-observer";
import StretchContent from "../components/StretchContent/StretchContent";
// qm to as stas when calling hook do we still need the inView?
const JoinUs = ({ heading, videoClip, whyStretchSection, preview }) => {
  const { ref, inView } = useInView({
    rootMargin: "-100px 0px 0px 0px",
  });
  const { ref: footerref, inView: footerinView } = useInView({});

  return (
    <div>
      <Layout
        preview={preview}
        isNavBarScrolled={!inView}
        isNavBarFilled={false}
        stickyNavBar
        showDrawerTab={!footerinView}
        hasDrawerTab={true}
        navLinkColor={inView ? "#fff" : "rgb(29, 93, 68)"}
        navBgColor={inView ? " rgb(59 58 64 / 50%)" : "rgb(224, 242, 241)"}
      >
        <div ref={ref} className={styles["stretchfacts-test"]}>
          <h3 className={styles.heading}>{heading}</h3>
          <video loop autoPlay className={styles.video}>
            <source src={videoClip} type="video/webm" />
            Sorry, your browser doesnt support embedded videos.
          </video>
        </div>
        <div className={styles.title}>
          <h1> {whyStretchSection.title}</h1>
        </div>

        {whyStretchSection.facts.map((fact, index) => {
          return <StretchContent fact={fact} key={index} />;
        })}

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
