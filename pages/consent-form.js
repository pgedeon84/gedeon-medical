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
    patientName: "",
    dateOfBirth: "",
    mobileNumber: "",
    consentStatus: "",
    signature: "",
    date: new Date().toISOString().split("T")[0],
  });

  const [submissionState, setSubmissionState] = useState({
    submitting: false,
    success: false,
    error: null,
    captchaScore: null,
  });

  const formRef = useRef(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Verify reCAPTCHA site key is available
  useEffect(() => {
    if (!recaptchaSiteKey) {
      console.error("reCAPTCHA site key is missing");
      setSubmissionState((prev) => ({
        ...prev,
        error: "Security configuration error. Please contact support.",
      }));
    }
  }, [recaptchaSiteKey]);

  useEffect(() => {
    const handleScriptError = () => {
      setSubmissionState((prev) => ({
        ...prev,
        error: "Security features failed to load. Please refresh the page.",
      }));
    };

    const script = document.querySelector('script[src*="recaptcha/api.js"]');
    if (script) {
      script.addEventListener("error", handleScriptError);
    }

    return () => {
      if (script) {
        script.removeEventListener("error", handleScriptError);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const verifyCaptcha = async (token) => {
    try {
      const response = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error(`Verification failed with status ${response.status}`);
      }

      const data = await response.json();
      if (!data.success) {
        console.error("reCAPTCHA verification failed:", data["error-codes"]);
      }
      return data;
    } catch (error) {
      console.error("CAPTCHA verification error:", error);
      return { success: false, score: 0, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState({ submitting: true, success: false, error: null });

    try {
      // Validate reCAPTCHA is loaded
      if (!window.grecaptcha) {
        throw new Error(
          "Security verification not loaded. Please refresh the page."
        );
      }

      // Validate we have a site key
      if (!recaptchaSiteKey) {
        throw new Error(
          "Security configuration error. Please contact support."
        );
      }

      // Execute reCAPTCHA
      const token = await window.grecaptcha.execute(recaptchaSiteKey, {
        action: "submit",
      });

      // Verify with backend
      const { success, score, error } = await verifyCaptcha(token);
      if (error) throw new Error(error);

      // Validate score
      const threshold = process.env.NODE_ENV === "development" ? 0.1 : 0.5;
      if (!success || score < threshold) {
        throw new Error(
          `Security verification failed (score: ${score.toFixed(
            1
          )}). Please try again.`
        );
      }

      // Submit form data
      const response = await fetch(
        "https://formsubmit.co/ajax/info@gedeonmedicalcenter.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _captcha: "true",
            "g-recaptcha-response": token,
            _subject: "New SMS Consent Form - Gedeon Medical Center",
            _template: "table",
            _autoresponse: `Dear ${
              formData.patientName || "Patient"
            },\n\nThank you for submitting your SMS consent form.`,
            _honeypot: "",
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Form submission failed");
      }

      setSubmissionState({
        submitting: false,
        success: true,
        error: null,
        captchaScore: score,
      });
      formRef.current?.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionState({
        submitting: false,
        success: false,
        error: error.message || "An unknown error occurred",
        captchaScore: submissionState.captchaScore,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Gedeon Medical Center | SMS Consent Form</title>
        <meta name="description" content="SMS communication consent form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <NavbarSpacer />

      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        strategy="lazyOnload"
        onError={() => {
          setSubmissionState((prev) => ({
            ...prev,
            error: "Failed to load security features. Please refresh.",
          }));
        }}
      />

      <div className={classes.gmc__form_container}>
        <h1>Gedeon Medical Center – SMS Communication Consent Form</h1>

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
            <p>A confirmation has been sent to your email.</p>
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
                value={formData.patientName}
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
                value={formData.dateOfBirth}
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
                value={formData.mobileNumber}
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
                value={formData.signature}
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
                value={formData.date}
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
                {" "}
                Privacy
              </a>{" "}
              &amp;{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Terms
              </a>
            </div>

            {process.env.NODE_ENV === "development" &&
              submissionState.captchaScore !== null && (
                <div className={classes.gmc__captcha_debug}>
                  reCAPTCHA Score: {submissionState.captchaScore.toFixed(2)}
                  {submissionState.captchaScore < 0.5 && (
                    <span> (Below recommended threshold)</span>
                  )}
                </div>
              )}
          </form>
        )}
      </div>
    </>
  );
}

export default SMSConsentForm;
