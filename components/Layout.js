import Navbar from "./navbar/navbar";
import Footer from "../containers/footer/footer";
import NavbarSpacer from "./navbar/navbarSpacer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <NavbarSpacer />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
