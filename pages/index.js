// import Head from "/next/head";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

import Image from "next/image";
import { getAllSections, getJSONSections } from "../lib/sections";

const Home = ({ sections }) => {
  return (
    <>
      <NavBar />

      <div>
        JSON
        {sections.map((section) => (
          <div>
            <Image src={section.image} alt="dd" width={500} height={500} />
            <div>{section.title}</div>
            <div>{section.content}</div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const sections = getJSONSections();
  // geet secondary section
  // get testimonial
  // const sections = getAllSections();
  // const sections = getAllSections();
  console.log(sections);

  return {
    props: { sections },
  };
}
