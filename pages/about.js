import Link from "next/link";
import Layout from "../components/Layout/Layout";
const About = () => {
  return (
    <Layout>
      <h4>About Me </h4>
      <Link href="/">
        <a> Go back to Home</a>
      </Link>
    </Layout>
  );
};

export default About;
