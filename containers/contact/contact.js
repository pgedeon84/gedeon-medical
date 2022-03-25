import classes from "./contact.module.css";
import { Widget } from "@typeform/embed-react";
import Image from "next/image";
import logo from "../../public/images/GMC-alternate-logo-large.svg";
import waves from "../../public/images/wave.svg";

// import { useRef } from "react";
function Contact() {
  // const firstNameInputRef = useRef();
  // const lastNameInputRef = useRef();
  // const emailInputRef = useRef();
  // const phoneInputRef = useRef();
  // const messageInputRef = useRef();

  // function onSubmitHandler(event) {
  //   event.preventDefault();
  //   const enteredFirstName = firstNameInputRef.current.value;
  //   const enteredLastName = lastNameInputRef.current.value;
  //   const enteredEmail = emailInputRef.current.value;
  //   const enteredPhone = phoneInputRef.current.value;
  //   const enteredMessage = messageInputRef.current.value;

  //   const patientInfo = {
  //     firstName: enteredFirstName,
  //     lastName: enteredLastName,
  //     email: enteredEmail,
  //     phone: enteredPhone,
  //     message: enteredMessage,
  //   };

  // }

  return (
    <section className={classes.gmc__contact}>
      <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1440 32L1320 64C1200 96 960 160 720 197.3C480 235 240 245 120 250.7L0 256V320H120C240 320 480 320 720 320C960 320 1200 320 1320 320H1440V32Z"
          fill="#385CAD"
        />
      </svg>
      <div id="contact" className={classes.gmc__contact_header__form_container}>
        <Widget
          id="mgvknHds"
          style={{ width: "100%" }}
          className={classes.gmc__contact_form_survey}
        />
      </div>
      <Image src={waves} alt="waves" layout="responsive" />
      <div className={classes.gmc__contact_header__form_image_container}>
        <Image src={logo} alt="GMC Logo" layout="responsive" />
      </div>
    </section>
  );
}

export default Contact;
