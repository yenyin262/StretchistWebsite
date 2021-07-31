import styles from "./SocialSection.module.css";
import SocialSectionItem from "../SocialSectionItem/SocialSectionItem";

const SocialSection = ({ socialSections }) => {
  return (
    <div className={styles.socialsection}>
      {socialSections.map((socialSection, index) => (
        <SocialSectionItem data={socialSection} key={index} />
      ))}
    </div>
  );
};

export default SocialSection;
