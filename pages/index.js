import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import {
  getJSONSections,
  getJSONSocialSections,
  getJSONtestimonials,
  getImageCollage,
} from "../lib/sections";
import HeroImage from "../components/HeroImage/HeroImage";
import styles from "./index.module.css";
import MainSection from "../components/MainSection/MainSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import SocialSection from "../components/SocialSection/SocialSection";
import ImgCollageSection from "../components/ImgCollageSection/ImgCollageSection";

const Home = ({ sections, socialSections, testimonials, imgCollages }) => {
  return (
    <div className={styles.home}>
      <HeroImage>
        <NavBar />
      </HeroImage>
      <div>
        {sections.map((section, index) => (
          <MainSection data={section} key={index} />
        ))}
      </div>

      <SocialSection socialSections={socialSections} />

      <TestimonialSection testimonials={testimonials} />
      <ImgCollageSection imgCollages={imgCollages} />
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const sections = getJSONSections();
  const socialSections = getJSONSocialSections();
  const testimonials = getJSONtestimonials();

  const imgCollages = getImageCollage();
  console.log(sections);

  return {
    props: { sections, socialSections, testimonials, imgCollages },
  };
}
