import { useRef } from "react";
import classes from "./contact.module.css";
import SectionTitle from "../../components/ui/section-title/section-title";
import { Widget } from "@typeform/embed-react";

function Contact() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const messageInputRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();
    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const patientInfo = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      phone: enteredPhone,
      message: enteredMessage,
    };

    console.log(patientInfo);
  }

  return (
    <section id="contact" className={classes.gmc__contact}>
      {/* <div className={classes.gmc__contact_header}>
        <SectionTitle title={"contact"} />
      </div> */}
      <div className={classes.gmc__contact_header__form_container}>
        <Widget
          id="mgvknHds"
          style={{ width: "100%" }}
          className={classes.gmc__contact_form}
        />
      </div>
    </section>
  );
}

export default Contact;
