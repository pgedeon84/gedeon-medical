import { useState, useEffect, useRef } from "react";
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
  const menuRef = useRef(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Check if we're clicking on the hamburger icon
        const hamburger = document.querySelector(
          `.${classes.gmc__navbar_hamburger}`
        );
        if (!hamburger.contains(event.target)) {
          setToggleMenu(false);
        }
      }
    };

    if (toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setVisible(isScrollingDown && currentScrollPos > 100 ? false : true);
      setPrevScrollPos(currentScrollPos);
    };

    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, toggleMenu]);

  function NavbarLinks({ mobile = false }) {
    return (
      <ul className={mobile ? classes.mobile_links : classes.desktop_links}>
        <li onClick={() => setToggleMenu(false)}>
          <Link href="/#about" className={classes.nav_link}>
            About us
          </Link>
        </li>
        <li onClick={() => setToggleMenu(false)}>
          <Link href="/#services" className={classes.nav_link}>
            Services
          </Link>
        </li>
        <li onClick={() => setToggleMenu(false)}>
          <Link href="/#meetthedoc" className={classes.nav_link}>
            Meet the Doc
          </Link>
        </li>
        <li onClick={() => setToggleMenu(false)}>
          <Link href="/#reviews" className={classes.nav_link}>
            Reviews
          </Link>
        </li>
        <li onClick={() => setToggleMenu(false)}>
          <Link href="/privacy-policy" className={classes.nav_link}>
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
    <>
      {toggleMenu && (
        <div
          className={classes.menu_overlay}
          onClick={() => setToggleMenu(false)}
        />
      )}

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

        <div className={classes.gmc__navbar_hamburger}>
          {toggleMenu ? (
            <RiCloseLine
              color="#385CAD"
              size={30}
              onClick={() => setToggleMenu(false)}
              className={classes.menu_icon}
            />
          ) : (
            <RiMenuLine
              color="#385CAD"
              size={30}
              onClick={() => setToggleMenu(true)}
              className={classes.menu_icon}
            />
          )}
        </div>

        <div
          ref={menuRef}
          className={`${classes.mobile_menu} ${
            toggleMenu ? classes.menu_open : ""
          }`}
        >
          <nav className={classes.mobile_nav}>
            <NavbarLinks mobile={true} />
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
