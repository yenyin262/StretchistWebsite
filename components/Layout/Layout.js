import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#00421a",
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
