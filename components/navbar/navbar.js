import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/GMC-primary-logo-large.svg";
import logo_favi from "../../public/images/GMC-favicon-logo.svg";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import classes from "./navbar.module.css";
import utils from "../../styles/utils.module.css";

import { motion } from "motion/react";

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
        <li onClick={() => setToggleMenu(false)}>
          <Link href="#about">About us</Link>
        </li>
        <li onClick={() => setToggleMenu(false)}>
          <Link href="#services">Services</Link>
        </li>
        <li onClick={() => setToggleMenu(false)}>
          <Link href="#meetthedoc">Meet the Doc</Link>
        </li>
        <li>
          <Link href="#reviews" onClick={() => setToggleMenu(false)}>
            Reviews
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
          <Link
            href="#home"
            onClick={() => (document.documentElement.scrollTop = 0)}
          >
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={classes.gmc__navbar_links__logo_fav}>
          <Link href="#home">
            <Image src={logo_favi} alt="Logo" layout="responsive" />
          </Link>
        </div>
        <nav className={classes.gmc__navbar_links__container}>
          <NavbarLinks />
        </nav>
      </div>
      {/* <div className={classes.gmc__navbar_links__contact}>
        <Link href="#contact" passHref>
          <button className={utils.gradient_animation} type="button">
            <a>Book Now</a>
          </button>
        </Link>
      </div> */}
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
              {/* <div
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
                    Book Now
                  </button>
                </Link>
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
