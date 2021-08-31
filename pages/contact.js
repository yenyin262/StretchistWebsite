import Layout from "../components/Layout/Layout";
import styles from "./contact.module.css";
import Image from "next/image";
const Contact = () => {
  return (
    <Layout>
      <div style={{ margin: "20px", height: "50vh" }}>
        <h2 className={styles.heading}>Contact Us</h2>
        <div
          style={{
            width: "100%",
            marginTop: "20px",
            backgroundColor: "#8fd4c5",
            maxWidth: "500px",
            margin: " 0 auto",
          }}
        >
          {/* <Image src={"/g.jpg"} height={540} width={400} /> */}
          <p
            style={{
              textAlign: "center",
              padding: "30px",
            }}
          >
            For general inquries and partnership opportunities, please email{" "}
            <span style={{ fontWeight: "bold" }}> thestretchist@gmail.com</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
