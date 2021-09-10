import Layout from "../components/Layout/Layout";
import styles from "./contact.module.css";
import { getJSONContactData } from "../lib/contact";
const Contact = ({ title, message, email }) => {
  return (
    <Layout>
      <div style={{ margin: "20px", height: "50vh" }}>
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
  );
};

export default Contact;

export async function getStaticProps() {
  const props = getJSONContactData();

  return { props };
}
