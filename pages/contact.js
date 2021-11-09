import Layout from "../components/Layout/Layout";
import styles from "../styles/contact.module.css";
// import { getJSONContactData } from "../lib/contact";
import { getContactSection } from "../lib/api";
import { useInView } from "react-intersection-observer";

const Contact = ({ title, message, email, preview }) => {
  const { ref: footerref, inView: footerinView } = useInView({
    rootMargin: "0px 0px 0px 0px",
  });
  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          :global(.nav-link-dynamic-color) {
            color: #1d5d44;
          }
        }
      `}</style>
      <Layout
        preview={preview}
        showDrawerTab={!footerinView}
        hasDrawerTab={true}
      >
        <div
          style={{
            margin: "20px",
            height: "50vh",
          }}
        >
          <h2 className={styles.heading}>{title}</h2>
          <div
            style={{
              width: "100%",
              marginTop: "20px",
              backgroundColor: "#8fd4c5",
              maxWidth: "500px",
              margin: " 0 auto",
            }}
          >
            <p
              style={{
                padding: "30px",
                textAlign: "center",
                lineHeight: "2",
              }}
            >
              {message} <span style={{ fontWeight: "bold" }}> {email} </span>
              <a
                href="https://calendly.com/thestretchist/book-your-session"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles[`drawer-btn`]}>
                  Click here to get stretched!
                </div>
              </a>
            </p>
          </div>
        </div>
        <div ref={footerref}></div>
      </Layout>
    </>
  );
};

export default Contact;

export async function getStaticProps({ preview = false }) {
  const { title, message, email } = await getContactSection({ preview });

  return { props: { title, message, email, preview } };
}
