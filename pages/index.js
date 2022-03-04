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
import { useInView } from "react-intersection-observer";
import DrawerTab from "../components/DrawerTab/DrawerTab";

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
  const { ref, inView: isScrolled } = useInView({
    rootMargin: "-130px 0px 0px 0px",
  });
  const { ref: footerref, inView: footerinView } = useInView({});

  return (
    <Preview enabled={preview}>
      <div className={styles.home}>
        <div ref={ref}>
          <HeroImage subtitle={subtitle} title={title} heroImage={heroImage}>
            <NavBar
              navBgColor={
                isScrolled ? "rgb(59 58 64 / 50%)" : "rgb(224, 242, 241)"
              }
              isNavLinkFilled={false}
              isScrolled={!isScrolled}
              navLinkColor={isScrolled ? "#e8f0f2" : "rgb(29, 93, 68)"}
              sticky
            />
          </HeroImage>
        </div>

        {/* map through the sections  */}
        {sections.map((section, index) => (
          <MainSection data={section} key={index} />
        ))}
        <SocialSection socialSections={socialSections} />
        <TestimonialSection testimonials={testimonials} />
        <ImgCollageSection imgCollages={imgCollages} />
        <DrawerTab show={!footerinView} />
        <div ref={footerref}>
          <Footer />
        </div>
      </div>
    </Preview>
  );
};

export default Home;

// assigning the value of preview to false by default
export async function getStaticProps({ preview = false }) {
  // const sections = getJSONSections();
  // const socialSections = getJSONSocialSections();
  // const testimonials = getJSONtestimonials();
  const testimonials = await getTestimonialSection({ preview });
  // const imgCollages = getImageCollage();
  const imgCollages = await getImageCollageSection({ preview });
  // const { heroImage, title, subtitle } = getJSONHeroData();
  const socialSections = await getSocialSection({ preview });

  // define a variable assigning the result of the getIntroductionSection function call which returns
  // the data from the API.
  // When the preview data is assigned to false it will show the original data.
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
