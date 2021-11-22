import styles from "./SocialSection.module.css";
import SocialSectionItem from "../SocialSectionItem/SocialSectionItem";
import PropTypes from "prop-types";

const SocialSection = ({ socialSections }) => {
  console.log(typeof socialSections, "typessss sections");
  return (
    <div className={styles["social-section"]}>
      {socialSections.map((socialSection, index) => (
        <SocialSectionItem data={socialSection} key={index} />
      ))}
    </div>
  );
};

export default SocialSection;

SocialSection.propTypes = {
  socialSections: PropTypes.array,
};
