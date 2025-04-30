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

  const formRef = useRef(null);
  const formContainerRef = useRef(null);

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
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.Patient_Name.trim())
      errors.Patient_Name = "Patient name is required";
    if (!formData.Date_Of_Birth)
      errors.Date_Of_Birth = "Date of birth is required";
    if (!formData.Mobile_Number) {
      errors.Mobile_Number = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.Mobile_Number)) {
      errors.Mobile_Number = "Please enter a valid 10-digit number";
    }
    if (!formData.Consent_Status)
      errors.Consent_Status = "Consent selection is required";
    if (!formData.Signature.trim()) errors.Signature = "Signature is required";
    if (!formData.Date) errors.Date = "Date is required";

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
      const canvas = await html2canvas(formContainerRef.current, {
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        width: formContainerRef.current.scrollWidth, // Full width (including overflow)
        height: formContainerRef.current.scrollHeight, // Full height
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
        scale: 1, // Avoid scaling (capture original size)
        useCORS: true, // For external images (e.g., your logo)
        backgroundColor: "#ffffff", // Ensure white background
        logging: false, // Disable console logs
      });
      return canvas.toDataURL("image/jpeg", 0.8); // 80% quality JPEG
    } catch (error) {
      console.error("Screenshot error:", error);
      return null;
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
      if (!window.grecaptcha?.enterprise) {
        throw new Error("Security verification not loaded. Please refresh.");
      }

      const token = await window.grecaptcha.enterprise.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit_form" }
      );

      const captchaResult = await verifyCaptcha(token, "submit_form");
      if (!captchaResult.success) {
        throw new Error(captchaResult.error || "Verification failed");
      }

      const screenshot = await captureFormScreenshot();

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData: {
            Message: `"By providing my consent below, I, ${formData.Patient_Name}, authorize Gedeon Medical Center to send SMS text messages...`,
            ...formData,
          },
          screenshot,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Submission failed");

      setSubmissionState({
        submitting: false,
        success: true,
        error: null,
        captchaScore: captchaResult.score,
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

      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />

      <Navbar />
      <NavbarSpacer />

      <motion.div
        className={classes.gmc__form_container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        ref={formContainerRef}
      >
        <motion.div variants={fadeInUp}>
          <h1>
            Gedeon Medical Center <br /> SMS Communication Consent Form
          </h1>
        </motion.div>

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.gmc__form_success}
            key="form-success"
          >
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
            key="consent-form"
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
                disabled={submissionState.submitting}
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
