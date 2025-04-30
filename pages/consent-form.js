import { useState, useRef, useEffect } from "react";
import classes from "./consentForm.module.css";
import Image from "next/image";
import logo from "../public/images/GMC-alternate-logo-large.svg";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import { NavbarSpacer } from "../components";
import Script from "next/script";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";

// Animation configuration
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

function SMSConsentForm() {
  const [formData, setFormData] = useState({
    Patient_Name: "",
    Date_Of_Birth: "",
    Mobile_Number: "",
    Consent_Status: "",
    Signature: "",
    Date: new Date().toISOString().split("T")[0],
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionState, setSubmissionState] = useState({
    submitting: false,
    success: false,
    error: null,
    captchaScore: null,
  });
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.grecaptcha?.enterprise) {
      setRecaptchaReady(true);
    }
  }, []);

  const handleRecaptchaLoad = () => {
    window.grecaptcha.enterprise.ready(() => {
      setRecaptchaReady(true);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.Patient_Name.trim()) {
      errors.Patient_Name = "Patient name is required";
    }

    if (!formData.Date_Of_Birth) {
      errors.Date_Of_Birth = "Date of birth is required";
    }

    if (!formData.Mobile_Number) {
      errors.Mobile_Number = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.Mobile_Number)) {
      errors.Mobile_Number = "Please enter a valid 10-digit number";
    }

    if (!formData.Consent_Status) {
      errors.Consent_Status = "Consent selection is required";
    }

    if (!formData.Signature.trim()) {
      errors.Signature = "Signature is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const verifyCaptcha = async (token, action) => {
    try {
      const response = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, action }),
      });

      if (!response.ok) throw new Error("Verification failed");
      return await response.json();
    } catch (error) {
      console.error("CAPTCHA verification error:", error);
      throw error;
    }
  };

  const captureFormScreenshot = async () => {
    try {
      const options = {
        scale: 0.8,
        useCORS: true,
        logging: true,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
        onclone: (clonedDoc) => {
          const meta = clonedDoc.createElement("meta");
          meta.name = "viewport";
          meta.content = "width=device-width, initial-scale=1.0";
          clonedDoc.head.appendChild(meta);

          const form = clonedDoc.querySelector("form");
          if (form) {
            form.style.opacity = "1";
            form.style.transform = "none";
          }
        },
      };

      const canvas = await html2canvas(formRef.current, options);
      return await new Promise((resolve) => {
        canvas.toBlob(resolve, "image/jpeg", 0.7);
      });
    } catch (error) {
      console.error("Screenshot capture failed:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmissionState({
      submitting: true,
      success: false,
      error: null,
      captchaScore: null,
    });

    try {
      // 1. Verify reCAPTCHA
      if (!recaptchaReady) {
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

      // 2. Capture screenshot
      const screenshotBlob = await captureFormScreenshot();
      const screenshotFile = new File([screenshotBlob], "consent-form.jpg", {
        type: "image/jpeg",
      });

      // 3. Prepare form data
      const formPayload = new FormData(e.target);

      // Add your custom message
      formPayload.append(
        "Message",
        `"By providing my consent below, I, ${formData.Patient_Name}, authorize Gedeon Medical Center to send SMS text messages to the phone number I have provided regarding my healthcare, including but not limited to appointment reminders, treatment information, and administrative updates. I understand that my consent authorizes the use of an automated messaging system, and that my consent is voluntary and not a condition for receiving medical treatment. This authorization applies to communications submitted via gedeonmedicalcenter.com."`
      );

      // Add screenshot
      formPayload.append("attachment", screenshotFile);

      // 4. Submit to endpoint
      const response = await fetch(
        "https://formsubmit.co/ajax/info@gedeonmedicalcenter.com",
        {
          method: "POST",
          body: formPayload,
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Form submission failed");
      }

      // 5. Update UI state
      setSubmissionState({
        submitting: false,
        success: true,
        error: null,
        captchaScore: result.score,
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionState({
        submitting: false,
        success: false,
        error: error.message || "Submission failed. Please try again.",
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

      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
        onLoad={handleRecaptchaLoad}
        onError={() => {
          setSubmissionState((prev) => ({
            ...prev,
            error: "Failed to load security features",
          }));
        }}
      />

      <Navbar />
      <NavbarSpacer />

      <motion.div
        className={classes.gmc__form_container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={fadeInUp}>
          <h1>
            Gedeon Medical Center <br /> SMS Communication Consent Form
          </h1>
        </motion.div>

        {/* Logo */}
        <motion.div
          variants={fadeInUp}
          className={classes.gmc__consent_image_container}
        >
          <Image
            src={logo}
            alt="GMC Logo"
            className={classes.gmc__consent_img}
            priority
          />
        </motion.div>

        {submissionState.success ? (
          <motion.div variants={fadeInUp} className={classes.gmc__form_success}>
            <h2>✓ Consent Form Submitted</h2>
            <p>A confirmation has been sent.</p>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeInUp}
            ref={formRef}
            onSubmit={handleSubmit}
            className={classes.gmc__consent_form}
            noValidate
          >
            {/* Patient Name */}
            <motion.div variants={fadeInUp} className={classes.gmc__form_group}>
              <label htmlFor="Patient_Name">Patient Name:</label>
              <input
                type="text"
                id="Patient_Name"
                name="Patient_Name"
                value={formData.Patient_Name}
                onChange={handleChange}
                required
                minLength={2}
              />
              {formErrors.Patient_Name && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={classes.gmc__form_error_text}
                >
                  {formErrors.Patient_Name}
                </motion.span>
              )}
            </motion.div>

            {/* Date of Birth */}
            <motion.div variants={fadeInUp} className={classes.gmc__form_group}>
              <label htmlFor="Date_Of_Birth">Date of Birth:</label>
              <input
                type="date"
                id="Date_Of_Birth"
                name="Date_Of_Birth"
                value={formData.Date_Of_Birth}
                onChange={handleChange}
                required
                max={new Date().toISOString().split("T")[0]}
              />
              {formErrors.Date_Of_Birth && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={classes.gmc__form_error_text}
                >
                  {formErrors.Date_Of_Birth}
                </motion.span>
              )}
            </motion.div>

            {/* Mobile Number */}
            <motion.div variants={fadeInUp} className={classes.gmc__form_group}>
              <label htmlFor="Mobile_Number">Mobile Number:</label>
              <input
                type="tel"
                id="Mobile_Number"
                name="Mobile_Number"
                value={formData.Mobile_Number}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="10-digit phone number without spaces or dashes"
                required
              />
              {formErrors.Mobile_Number && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={classes.gmc__form_error_text}
                >
                  {formErrors.Mobile_Number}
                </motion.span>
              )}
            </motion.div>

            {/* Consent Text */}
            <motion.div
              variants={fadeInUp}
              className={classes.gmc__consent_text}
            >
              <legend>
                I consent to receive SMS text messages from{" "}
                <b>Gedeon Medical Center</b> to the phone number I have provided
                via the use of an automated messaging system regarding my
                healthcare, including:
              </legend>
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
            </motion.div>

            {/* Radio Group */}
            <motion.fieldset
              variants={fadeInUp}
              className={classes.gmc__radio_group}
            >
              <legend>Consent to Receive SMS Messages</legend>
              {formErrors.Consent_Status && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={classes.gmc__form_error_text}
                >
                  {formErrors.Consent_Status}
                </motion.span>
              )}
              <label className={classes.gmc__radio_option}>
                <input
                  type="radio"
                  name="Consent_Status"
                  value="agree"
                  onChange={handleChange}
                  checked={formData.Consent_Status === "agree"}
                />
                <span>I consent to receive SMS messages</span>
              </label>

              <label className={classes.gmc__radio_option}>
                <input
                  type="radio"
                  name="Consent_Status"
                  value="decline"
                  onChange={handleChange}
                  checked={formData.Consent_Status === "decline"}
                />
                <span>I do not consent at this time</span>
              </label>
            </motion.fieldset>

            {/* Signature */}
            <motion.div variants={fadeInUp} className={classes.gmc__form_group}>
              <label htmlFor="Signature">Signature (Type Full Name):</label>
              <input
                type="text"
                id="Signature"
                name="Signature"
                value={formData.Signature}
                onChange={handleChange}
                required
                minLength={2}
              />
              {formErrors.Signature && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={classes.gmc__form_error_text}
                >
                  {formErrors.Signature}
                </motion.span>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={fadeInUp}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <button
                type="submit"
                className={classes.gmc__form_button}
                disabled={submissionState.submitting || !recaptchaReady}
              >
                {submissionState.submitting
                  ? "Submitting..."
                  : "Submit Consent"}
              </button>
            </motion.div>

            {/* Error Message */}
            {submissionState.error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={classes.gmc__form_error}
              >
                <p>{submissionState.error}</p>
                <p>Need help? Call 954-842-4285</p>
              </motion.div>
            )}
          </motion.form>
        )}
      </motion.div>
    </>
  );
}

export default SMSConsentForm;
