import classes from "./footer.module.css";
import Image from "next/image";
import logoLrg from "../../public/images/GMC-alternate-logo-large.svg";

function Footer() {
  return (
    <div className={classes.gmc__footer}>
      <div className={classes.gmc__footer_content}>
        <p>
          11011 SHERIDAN STREET, SUITE 215/216 COOPER CITY, FLORIDA 33026,
          <br />
          UNITED STATES
        </p>
      </div>
      <div className={classes.gmc__footer_copyrights}>
        <p>© 2022 GEDEON MEDICAL CENTER</p>

        <p>
          Designed and Built by <span>Webifi.io</span>
        </p>
      </div>
    </div>
  );
}
export default Footer;
