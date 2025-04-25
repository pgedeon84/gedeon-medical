import classes from "./footer.module.css";
import Image from "next/image";
import logo from "../../public/images/GMC-alternate-logo-large.svg";

function Footer() {
  return (
    <footer className={classes.gmc__footer}>
      <div className={classes.gmc__footer_container}>
        <div className={classes.gmc__footer_content_wrapper}>
          <div className={classes.gmc__footer_image_container}>
            <Image
              src={logo}
              alt="GMC Logo"
              className={classes.gmc__footer_img}
              priority
            />
          </div>
          <div className={classes.gmc__footer_content_container}>
            <div className={classes.gmc__footer_content}>
              <p>
                11011 SHERIDAN STREET, SUITE 215 COOPER CITY, FLORIDA 33026,
                UNITED STATES
              </p>
            </div>
            <div className={classes.gmc__footer_copyrights}>
              <p>© {new Date().getFullYear()} GEDEON MEDICAL CENTER</p>
              <p>
                Designed and Built by <span>IG: @prince_da_prettyboy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
