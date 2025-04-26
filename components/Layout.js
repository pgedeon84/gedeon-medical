import Navbar from "./navbar/navbar";
import Footer from "../containers/footer/footer";
import NavbarSpacer from "./navbar/navbarSpacer";
import PageTransition from "./page-transition/page-transition";

const Layout = ({ children }) => {
  return (
    <>
      <PageTransition>
        <Navbar />
        <NavbarSpacer />
        <main>{children}</main>
        <Footer />
      </PageTransition>
    </>
  );
};

export default Layout;
