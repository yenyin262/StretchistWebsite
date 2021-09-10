import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import {
  getJSONSections,
  getJSONSocialSections,
  getJSONtestimonials,
  getImageCollage,
  getJSONHeroData,
} from "../lib/sections";
import HeroImage from "../components/HeroImage/HeroImage";
import styles from "./index.module.css";
import MainSection from "../components/MainSection/MainSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import SocialSection from "../components/SocialSection/SocialSection";
import ImgCollageSection from "../components/ImgCollageSection/ImgCollageSection";

const Home = ({
  sections,
  socialSections,
  testimonials,
  imgCollages,
  subtitle,
  title,
  heroImage,
}) => {
  return (
    <div className={styles.home}>
      <HeroImage subtitle={subtitle} title={title} heroImage={heroImage}>
        <NavBar />
      </HeroImage>
      {sections.map((section, index) => (
        <MainSection data={section} key={index} />
      ))}
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
  const { heroImage, title, subtitle } = getJSONHeroData();
  console.log(sections);

  return {
    props: {
      sections,
      socialSections,
      testimonials,
      imgCollages,
      heroImage,
      subtitle,
      title,
    },
  };
}
