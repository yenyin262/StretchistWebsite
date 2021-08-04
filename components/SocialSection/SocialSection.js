import styles from "./SocialSection.module.css";
import SocialSectionItem from "../SocialSectionItem/SocialSectionItem";

const SocialSection = ({ socialSections }) => {
  return (
    <div className={styles["social-section"]}>
      {socialSections.map((socialSection, index) => (
        <SocialSectionItem data={socialSection} key={index} />
      ))}
    </div>
  );
};

export default SocialSection;
