import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import classNames from "classnames";
import Preview from "../Preview";
import { useInView } from "react-intersection-observer";

// passing preview in this component so that it simulataneously exists in the components that use the Layout component.
const Layout = ({
  preview = false,
  isNavBarScrolled = false,
  stickyNavBar = false,
  children,
}) => {
  return (
    <Preview enabled={preview}>
      <style jsx>{`
        .navBarContainer {
          background-color: #e0f2f1;
        }
      `}</style>
      <div
        className={classNames(
          "navBarContainer",
          "joinUsContainer",
          "observer-test"
        )}
      >
        <NavBar isScrolled={isNavBarScrolled} sticky={stickyNavBar} />
      </div>
      {children}
      <Footer />
    </Preview>
  );
};

export default Layout;
