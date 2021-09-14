import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <style jsx>{`
        .layoutContainer {
          background-color: #e0f2f1;
        }
        .layoutContainer :global(.nav-link-dynamic-color) {
          color: #1d5d44;
        }
      `}</style>
      <div className={`layoutContainer`}>
        <NavBar />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
