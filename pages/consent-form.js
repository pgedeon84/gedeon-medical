import { useState, useRef, useEffect } from "react";
import classes from "./consentForm.module.css";
import Image from "next/image";
import logo from "../public/images/GMC-alternate-logo-large.svg";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import { NavbarSpacer } from "../components";
import Script from "next/script";

function SMSConsentForm() {
  const [formData, setFormData] = useState({
    Patient_Name: "",
    Date_Of_Birth: "",
    Mobile_Number: "",
    Consent_Status: "",
    Signature: "",
    Date: new Date().toISOString().split("T")[0],
  });

  const [submissionState, setSubmissionState] = useState({
    submitting: false,
    success: false,
    error: null,
    captchaScore: null,
  });

  const formRef = useRef(null);

  // Debug environment loading
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(
        "[DEBUG] reCAPTCHA key present:",
        !!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const verifyCaptcha = async (token, action) => {
    try {
      const response = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, action }),
      });

      if (!response.ok) throw new Error("Verification failed");

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("CAPTCHA verification error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState({
      submitting: true,
      success: false,
      error: null,
      captchaScore: null,
    });

    try {
      if (!window.grecaptcha?.enterprise) {
        throw new Error("Security verification not loaded. Please refresh.");
      }

      const token = await window.grecaptcha.enterprise.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit_form" }
      );

      const result = await verifyCaptcha(token, "submit_form");
      if (!result.success) {
        throw new Error(result.error || "Verification failed");
      }

      // Form submission logic here
      const response = await fetch(
        "https://formsubmit.co/ajax/info@gedeonmedicalcenter.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            _subject: "New SMS Consent Form - Gedeon Medical Center",
          }),
        }
      );

      if (!response.ok) throw new Error("Form submission failed");

      setSubmissionState({
        submitting: false,
        success: true,
        error: null,
        captchaScore: result.score,
      });
    } catch (error) {
      setSubmissionState({
        submitting: false,
        success: false,
        error: error.message,
        captchaScore: null,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Gedeon Medical Center | SMS Consent Form</title>
        <meta name="description" content="SMS communication consent form" />
      </Head>

      {/* reCAPTCHA Script */}
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
        onLoad={() => console.log("reCAPTCHA loaded successfully")}
        onError={() => {
          setSubmissionState((prev) => ({
            ...prev,
            error: "Failed to load security features",
          }));
        }}
      />

      <Navbar />
      <NavbarSpacer />

      <div className={classes.gmc__form_container}>
        <h1>
          Gedeon Medical Center <br /> SMS Communication Consent Form
        </h1>

        <div className={classes.gmc__consent_image_container}>
          <Image
            src={logo}
            alt="GMC Logo"
            className={classes.gmc__consent_img}
            priority
          />
        </div>

        {submissionState.success ? (
          <div className={classes.gmc__form_success}>
            <h2>✓ Consent Form Submitted</h2>
            <p>A confirmation has been sent.</p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={classes.gmc__consent_form}
            noValidate
          >
            <div className={classes.gmc__form_group}>
              <label htmlFor="patientName">Patient Name:</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.Patient_Name}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>

            <div className={classes.gmc__form_group}>
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.Date_Of_Birth}
                onChange={handleChange}
                required
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className={classes.gmc__form_group}>
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.Mobile_Number}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="10-digit phone number without spaces or dashes"
                required
              />
            </div>

            <div className={classes.gmc__consent_text}>
              <p>
                I consent to receive SMS text messages from Gedeon Medical
                Center regarding my healthcare, including:
              </p>
              <ul>
                <li>Appointment reminders</li>
                <li>Test results</li>
                <li>Prescription notifications</li>
                <li>Practice updates</li>
              </ul>
              <div className={classes.gmc__disclaimer}>
                <p>
                  Message frequency varies (typically 2-4/month). Standard
                  messaging rates apply.
                </p>
              </div>
            </div>

            <fieldset className={classes.gmc__radio_group}>
              <legend>Consent to Receive SMS Messages</legend>
              <label className={classes.gmc__radio_option}>
                <input
                  type="radio"
                  name="consentStatus"
                  value="agree"
                  onChange={handleChange}
                  required
                />
                <span>I consent to receive SMS messages</span>
              </label>

              <label className={classes.gmc__radio_option}>
                <input
                  type="radio"
                  name="consentStatus"
                  value="decline"
                  onChange={handleChange}
                />
                <span>I do not consent at this time</span>
              </label>
            </fieldset>

            <div className={classes.gmc__form_group}>
              <label htmlFor="signature">Signature (Type Full Name):</label>
              <input
                type="text"
                id="signature"
                name="signature"
                value={formData.Signature}
                onChange={handleChange}
                required
                minLength={2}
              />
            </div>

            <div className={classes.gmc__form_group}>
              <label htmlFor="date">Today&apos;s Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.Date}
                onChange={handleChange}
                required
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <button
              type="submit"
              className={classes.gmc__form_button}
              disabled={submissionState.submitting}
            >
              {submissionState.submitting ? "Submitting..." : "Submit Consent"}
            </button>

            {submissionState.error && (
              <div className={classes.gmc__form_error}>
                <p>{submissionState.error}</p>
                <p>Need help? Call 954-842-4285</p>
              </div>
            )}

            <div className={classes.gmc__captcha_badge}>
              Protected by reCAPTCHA -
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy
              </a>{" "}
              &amp;{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms
              </a>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default SMSConsentForm;
