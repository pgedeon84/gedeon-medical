import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/GMC-primary-logo-large.svg";
import logo_favi from "../../public/images/GMC-favicon-logo.svg";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import classes from "./navbar.module.css";
import utils from "../../styles/utils.module.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setVisible(isScrollingDown && currentScrollPos > 100 ? false : true);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  function NavbarLinks() {
    return (
      <ul>
        <li onClick={() => setToggleMenu(false)}>
          <Link href="/#about" passHref>
            About us
          </Link>
        </li>
        <li onClick={() => setToggleMenu(false)}>
          <Link href="/#services" passHref>
            Services
          </Link>
        </li>
        <li onClick={() => setToggleMenu(false)}>
          <Link href="/#meetthedoc" passHref>
            Meet the Doc
          </Link>
        </li>
        <li>
          <Link href="/#reviews" passHref onClick={() => setToggleMenu(false)}>
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/privacy-policy"
            passHref
            onClick={() => setToggleMenu(false)}
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    );
  }

  function scrollToTop() {
    document.documentElement.scrollTop = 0;
    setToggleMenu(false);
  }

  return (
    <div
      className={`${classes.gmc__navbar} ${
        visible ? classes.navbar_visible : classes.navbar_hidden
      }`}
    >
      <div className={classes.gmc__navbar_links}>
        <div className={classes.gmc__navbar_links__logo}>
          <Link href="/#home" passHref onClick={scrollToTop}>
            <Image src={logo} alt="Logo" className={classes.gmc__nav_img} />
          </Link>
        </div>
        <div className={classes.gmc__navbar_links__logo_fav}>
          <Link href="/#home" passHref onClick={scrollToTop}>
            <Image
              src={logo_favi}
              alt="Logo"
              className={classes.gmc__nav_img}
            />
          </Link>
        </div>
        <nav className={classes.gmc__navbar_links__container}>
          <NavbarLinks />
        </nav>
      </div>

      {/* Hamburger Menu */}
      <div className={classes.gmc__navbar_hamburger}>
        {toggleMenu ? (
          <RiCloseLine
            color="#385CAD"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="#385CAD"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${classes.gmc__navbar_hamburger_container} ${utils.scale_in_tr}`}
          >
            <nav className={classes.gmc__navbar_hamburger_container__links}>
              <NavbarLinks />
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
