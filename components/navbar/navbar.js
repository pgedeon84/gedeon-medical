import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/GMC-primary-logo-large.svg";
import logo_favi from "../../public/images/GMC-favicon-logo.svg";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import classes from "./navbar.module.css";
import utils from "../../styles/utils.module.css";

import { motion } from "framer-motion";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  //Framer Motion props
  const top_down = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  function NavbarLinks() {
    return (
      <ul>
        <li>
          <Link href="#about">
            <a onClick={() => setToggleMenu(false)}>About us</a>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <a onClick={() => setToggleMenu(false)}>Services</a>
          </Link>
        </li>
        <li>
          <Link href="#meetthedoc">
            <a onClick={() => setToggleMenu(false)}>Meet the Doc</a>
          </Link>
        </li>
        <li>
          <Link href="#reviews">
            <a onClick={() => setToggleMenu(false)}>Reviews</a>
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={top_down}
      className={classes.gmc__navbar}
    >
      <div className={classes.gmc__navbar_links}>
        <div className={classes.gmc__navbar_links__logo}>
          <Link href="#home">
            <a onClick={() => (document.documentElement.scrollTop = 0)}>
              <Image src={logo} alt="Logo" />
            </a>
          </Link>
        </div>
        <div className={classes.gmc__navbar_links__logo_fav}>
          <Link href="#home">
            <a onClick={scrollToTop}>
              <Image src={logo_favi} alt="Logo" layout="responsive" />
            </a>
          </Link>
        </div>
        <nav className={classes.gmc__navbar_links__container}>
          <NavbarLinks />
        </nav>
      </div>
      <div className={classes.gmc__navbar_links__contact}>
        <Link href="#contact" passHref>
          <button className={utils.gradient_animation} type="button">
            <a>Contact</a>
          </button>
        </Link>
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
              <div
                className={
                  classes.gmc__navbar_hamburger_container__links_contact
                }
              >
                <Link href="#contact" passHref>
                  <button
                    className={utils.gradient_animation}
                    type="button"
                    onClick={() => setToggleMenu(false)}
                  >
                    {" "}
                    Contact
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
