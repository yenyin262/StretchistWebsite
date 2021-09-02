import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#e0f2f1",
        }}
      >
        <NavBar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
