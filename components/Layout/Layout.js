import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <div
        style={{
          paddingBottom: "20px",
          backgroundColor: "#10375C",
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
