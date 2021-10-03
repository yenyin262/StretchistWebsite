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
import styles from "../styles/index.module.css";
import MainSection from "../components/MainSection/MainSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import SocialSection from "../components/SocialSection/SocialSection";
import ImgCollageSection from "../components/ImgCollageSection/ImgCollageSection";
import {
  getHeroImage,
  getIntroductionSection,
  getSocialSection,
  getTestimonialSection,
  getImageCollageSection,
} from "../lib/api";
import Preview from "../components/Preview";

const Home = ({
  preview,
  sections,
  socialSections,
  testimonials,
  imgCollages,
  subtitle,
  title,
  heroImage,
}) => {
  return (
    <Preview enabled={preview}>
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
    </Preview>
  );
};

export default Home;

export async function getStaticProps({ preview = false }) {
  // const sections = getJSONSections();
  // const socialSections = getJSONSocialSections();
  // const testimonials = getJSONtestimonials();
  const testimonials = await getTestimonialSection({ preview });
  // const imgCollages = getImageCollage();
  const imgCollages = await getImageCollageSection({ preview });
  // const { heroImage, title, subtitle } = getJSONHeroData();
  const socialSections = await getSocialSection({ preview });
  const sections = await getIntroductionSection({ preview });

  const { heroImage, title, subtitle } = await getHeroImage({ preview });

  return {
    props: {
      preview,
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
