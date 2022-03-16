import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/GMC-primary-logo-large.svg";
import logo_favi from "../../public/images/GMC-favicon-logo.svg";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import classes from "./navbar.module.css";
import utils from "../../styles/utils.module.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function NavbarLinks() {
    return (
      <ul>
        <li>
          <Link href="#about">
            <a>About us</a>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="#meetthedoc">
            <a>Meet the Doc</a>
          </Link>
        </li>
        <li>
          <Link href="#reviews">
            <a>Reviews</a>
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <div className={classes.gmc__navbar}>
      <div className={classes.gmc__navbar_links}>
        <div className={classes.gmc__navbar_links__logo}>
          <Link href="#home">
            <a>
              <Image src={logo} alt="Logo" />
            </a>
          </Link>
        </div>
        <div className={classes.gmc__navbar_links__logo_fav}>
          <Link href="#home">
            <a>
              <Image src={logo_favi} alt="Logo" layout="responsive" />
            </a>
          </Link>
        </div>
        <nav className={classes.gmc__navbar_links__container}>
          <NavbarLinks />
        </nav>
      </div>
      <div className={classes.gmc__navbar_links__contact}>
        <button className={utils.gradient_animation} type="button">
          Contact
        </button>
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
            className={`${classes.gmc__navbar_hamburger_container} ${utils.scale_up_center}`}
          >
            <nav className={classes.gmc__navbar_hamburger_container__links}>
              <NavbarLinks />
              <div
                className={
                  classes.gmc__navbar_hamburger_container__links_contact
                }
              >
                <button type="button">Contact</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
