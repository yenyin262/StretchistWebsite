import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import classNames from "classnames";
const Layout = ({ children }) => {
  return (
    <>
      <style jsx>{`
        .navBarContainer {
          background-color: #e0f2f1;
        }
      `}</style>
      <div className={classNames("navBarContainer", "joinUsContainer")}>
        <NavBar />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
