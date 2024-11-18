import classes from "./contact.module.css";
import { Widget } from "@typeform/embed-react";
import Image from "next/image";
// import waves from "../../public/images/wave.svg";
import SectionTitle from "../../components/ui/section-title/section-title";

function Contact() {
  return (
    <section className={classes.gmc__contact} id="contact">
      {/* <div id="contact" className={classes.gmc__contact_header__form_container}>
        <Widget
          id="mgvknHds"
          style={{ width: "100%" }}
          className={classes.gmc__contact_form_survey}
        />
      </div> */}
      <div>
        <SectionTitle title="Book Now" />
      </div>
      <div className={classes.gmc__contact_iFrame_Container}>
        <iframe
          title="Book online appointments with Leon Gedeon | Patient Fusion"
          className={classes.gmc__contact_iFrame}
          frameBorder="0"
          src="https://www.patientfusion.com/external/appointment/fd00a13d-d36a-4def-985b-a1e590b9ac9e?origin=doctor"
        />
      </div>
      {/* <Image src={waves} alt="waves" layout="responsive" /> */}
    </section>
  );
}

export default Contact;
