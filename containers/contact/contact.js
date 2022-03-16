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
    <section className={classes.gmc__contact}>
      <div className={classes.gmc__contact_header}>
        <SectionTitle title={"contact us"} />
      </div>
      <div className={classes.gmc__contact_header__form_container}>
        {/* <h1>REQUEST AN APPOINTMENT</h1> */}
        {/* <form onSubmit={onSubmitHandler}>
          <div className={classes.gmc__contact_control}>
            <label htmlFor="first name">First Name</label>
            <input
              type="text"
              required
              id="first name"
              ref={firstNameInputRef}
            />
          </div>
          <div className={classes.gmc__contact_control}>
            <label htmlFor="last name">Last Name</label>
            <input type="text" required id="last name" ref={lastNameInputRef} />
          </div>
          <div className={classes.gmc__contact_control}>
            <label htmlFor="email">Email</label>
            <input type="email" required id="email" ref={emailInputRef} />
          </div>
          <div className={classes.gmc__contact_control}>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" required id="phone" ref={phoneInputRef} />
          </div>
          <div className={classes.gmc__contact_control}>
            <label htmlFor="message">Description</label>
            <textarea id="message" required rows="5" ref={messageInputRef} />
          </div>
          <div className={classes.gmc__contact_actions}>
            <p onClick={onSubmitHandler}>SEND REQUEST</p>
          </div>
        </form> */}
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
