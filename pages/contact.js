import Layout from "../components/Layout/Layout";
import styles from "./contact.module.css";
// import { getJSONContactData } from "../lib/contact";
import { getContactSection } from "../lib/api";

const Contact = ({ title, message, email, preview }) => {
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
              }}
            >
              {message} <span style={{ fontWeight: "bold" }}> {email} </span>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;

export async function getStaticProps({ preview = false }) {
  const { title, message, email } = await getContactSection({ preview });

  return { props: { title, message, email, preview } };
}
