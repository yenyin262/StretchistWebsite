import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import classNames from "classnames";
import Preview from "../Preview";
import { useInView } from "react-intersection-observer";
import DrawerTab from "../DrawerTab/DrawerTab";
import PropTypes from "prop-types";

// passing preview in this component so that it simulataneously exists in the components that use the Layout component.
const Layout = ({
  preview = false,
  isNavBarFilled,
  isNavBarScrolled = false,
  showDrawerTab = true,
  stickyNavBar = false,
  hasDrawerTab = false,
  children,
  navLinkColor,
  navBgColor,
}) => {
  return (
    <Preview enabled={preview}>
      <NavBar
        navLinkColor={navLinkColor}
        isNavLinkFilled={isNavBarFilled}
        isScrolled={isNavBarScrolled}
        sticky={stickyNavBar}
        navBgColor={navBgColor}
      />

      {children}
      {hasDrawerTab && <DrawerTab show={showDrawerTab} />}
      <Footer />
    </Preview>
  );
};

export default Layout;

Layout.propTypes = {
  preview: PropTypes.bool,
  isNavBarScrolled: PropTypes.bool,
  showDrawerTab: PropTypes.bool,
  stickyNavBar: PropTypes.bool,
  hasDrawerTab: PropTypes.bool,
  children: PropTypes.array,
};
