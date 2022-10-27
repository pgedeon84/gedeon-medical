import classes from "./footer.module.css";
import Image from "next/image";
import logo from "../../public/images/GMC-alternate-logo-large.svg";
import {
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

function Footer() {
  return (
    <footer className={classes.gmc__footer}>
      <div className={classes.gmc__footer_content_wrapper}>
        <div className={classes.gmc__footer_image_container}>
          <Image src={logo} alt="GMC Logo" layout="responsive" />
        </div>
        <div className={classes.gmc__footer_content_container}>
          <div className={classes.gmc__footer_content}>
            <p>
              11011 SHERIDAN STREET, SUITE 215 COOPER CITY, FLORIDA 33026,
              <br />
              UNITED STATES
            </p>
          </div>
          <div className={classes.gmc__footer_share_container}>
            <EmailIcon size={42} round={true} />
            <FacebookIcon size={42} round={true} />
            <WhatsappIcon size={42} round={true} />
            <LinkedinIcon size={42} round={true} />
          </div>
        </div>
      </div>
      <div className={classes.gmc__footer_copyrights}>
        <p>© 2022 GEDEON MEDICAL CENTER</p>
        <p>
          Designed and Built by <span>@prince_da_prettyboy</span>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
