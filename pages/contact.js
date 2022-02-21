import Layout from "../components/Layout/Layout";
import styles from "../styles/contact.module.css";
// import { getJSONContactData } from "../lib/contact";
import { getContactSection } from "../lib/api";
import { useInView } from "react-intersection-observer";

const Contact = ({ title, message, email, preview }) => {
  const { ref: footerref, inView: footerinView } = useInView({});
  return (
    <Layout
      navBgColor="#e0f2f1"
      isNavBarFilled={false}
      navLinkColor="#1d5d44"
      preview={preview}
      showDrawerTab={!footerinView}
      hasDrawerTab={true}
    >
      <div className={styles[`contact-container`]}>
        <h2 className={styles.heading}>{title}</h2>
        <div className={styles[`contact-content`]}>
          <p className={styles.message}>
            {message} <span className={styles.email}> {email} </span>
            <a
              href="https://calendly.com/thestretchist/book-your-session"
              target="_blank"
              rel="noreferrer"
              className={styles.as}
            >
              <span
                data-content="  Click here to get stretched!"
                aria-hidden="true"
              ></span>{" "}
              Click here to get stretched!
            </a>
          </p>
        </div>
      </div>
      <div ref={footerref}></div>
    </Layout>
  );
};

export default Contact;

export async function getStaticProps({ preview = false }) {
  const { title, message, email } = await getContactSection({ preview });

  return { props: { title, message, email, preview } };
}
