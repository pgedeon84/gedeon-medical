import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import classes from "./privacyPolicy.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/GMC-alternate-logo-large.svg";

function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Gedeon Medical Center | Privacy Policy</title>
      </Head>
      <Navbar />
      <main className={classes.gmc__privacy_content}>
        <section className={classes.gmc__privacy_container}>
          <h1 className={classes.gmc__privacy_header}>Privacy Policy</h1>
          <article>
            <p>
              <strong>Effective Date:</strong> November 19, 2024
            </p>
            <hr />
            <p>
              <strong>
                Gedeon Medical Center (referred to as &quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;)
              </strong>{" "}
              is committed to protecting your personal and health information.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information in accordance with applicable laws,
              including the Health Insurance Portability and Accountability Act
              (HIPAA).
            </p>
            <hr />
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, address, date of
                birth, phone number, email address.
              </li>
              <li>
                <strong>Health Information:</strong> Medical history, diagnosis,
                treatment plans, medications, test results, and insurance
                information.
              </li>
              <li>
                <strong>Billing Information:</strong> Credit card details,
                insurance policy numbers, and related financial data.
              </li>
            </ul>
            <hr />
            <h2>2. How We Use Your Information</h2>
            <p>
              We use your information for purposes including but not limited to:
            </p>
            <ul>
              <li>Providing medical treatment and services.</li>
              <li>
                Communicating with you about appointments, treatments, and
                follow-up care.
              </li>
              <li>Billing and processing insurance claims.</li>
              <li>Complying with legal and regulatory requirements.</li>
              <li>Improving our services through feedback and research.</li>
            </ul>
            <p>
              <strong>Note:</strong> SMS consent and phone numbers will not be
              shared with third parties or affiliates for marketing purposes.
            </p>
            <hr />
            <h2>3. Opt-In and Opt-Out</h2>
            <p>
              <strong>Opt-In:</strong> By providing your contact information,
              you consent to receiving appointment reminders, health updates,
              and related communications from us via phone, email, or text
              message.
            </p>
            <p>
              <strong>Types of Messages:</strong> Users can expect to receive
              messages such as:
            </p>
            <ul className="gmc__privacy_list">
              <li>Appointment reminders</li>
              <li>Account notifications</li>
              <li>Health-related updates</li>
              <li>Order alerts (e.g., prescriptions, test results)</li>
            </ul>
            <p>
              <strong>Messaging Frequency:</strong> Messaging frequency may
              vary.
            </p>
            <p>
              <strong>Message and Data Rates:</strong> Message and data rates
              may apply.
            </p>
            <p>
              <strong>Opt-Out:</strong> You can opt out of receiving text
              messages at any time by replying STOP to any of our messages. You
              may also opt out of emails by contacting us directly using the
              information below.
            </p>
            <p className={classes.gmc__privacy_text}>
              <strong>For Assistance:</strong> Text HELP or visit our website at{" "}
              <a
                href="https://www.gedeonmedicalcenter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.gmc__privacy_link}
              >
                https://www.gedeonmedicalcenter.com
              </a>
              .
            </p>
            <p>
              <strong>Please note:</strong> that opting out of communications
              may affect our ability to send you appointment reminders and other
              important updates related to your care.
            </p>
            <hr />
            <h2>4. How We Share Your Information</h2>
            <p>
              We may share your information as permitted or required by law,
              including with:
            </p>
            <ul>
              <li>
                <strong>Healthcare Providers:</strong> For continuity of care
                and coordination with other medical professionals.
              </li>
              <li>
                <strong>Insurance Companies:</strong> For claims processing and
                verification.
              </li>
              <li>
                <strong>Regulatory Bodies:</strong> To comply with federal,
                state, or local laws.
              </li>
              <li>
                <strong>Business Associates:</strong> Vendors and service
                providers who assist us in operating our practice, subject to
                strict confidentiality agreements.
              </li>
            </ul>
            <p>
              <strong>Note:</strong> We do not share phone numbers or SMS
              consent information with third parties or affiliates for marketing
              purposes.
            </p>
            <hr />
            <h2>5. How We Protect Your Information</h2>
            <p>
              We implement appropriate administrative, technical, and physical
              safeguards to protect your information, including:
            </p>
            <ul>
              <li>Encrypted storage of electronic health records (EHRs).</li>
              <li>
                Access controls to restrict information access to authorized
                personnel.
              </li>
              <li>
                Regular training for staff on data privacy and security
                protocols.
              </li>
            </ul>
            <hr />
            <h2>6. Your Rights</h2>
            <p>
              You have the following rights regarding your personal and health
              information:
            </p>
            <ul>
              <li>
                <strong>Access and Copies:</strong> Request access to or copies
                of your medical records.
              </li>
              <li>
                <strong>Amendments:</strong> Request corrections to your medical
                records if you believe they are inaccurate.
              </li>
              <li>
                <strong>Restrictions:</strong> Request restrictions on certain
                uses or disclosures of your information.
              </li>
              <li>
                <strong>Confidential Communications:</strong> Request
                communication through specific means (e.g., only by mail).
              </li>
              <li>
                <strong>Complaints:</strong> File a complaint if you believe
                your privacy rights have been violated.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              details below.
            </p>
            <hr />
            <h2>7. Cookies and Online Privacy</h2>
            <p>
              If you use our website, we may collect non-identifiable data such
              as browser type and visit frequency through cookies to improve
              your online experience. No health information is collected through
              our website unless explicitly provided by you.
            </p>
            <hr />
            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes
              in legal requirements or our practices. Updates will be posted on
              our website and at our office.
            </p>
            <hr />
            <h2>9. Contact Information</h2>
            <p>
              For questions, concerns, or to exercise your rights, contact us
              at:
            </p>
            <div className={classes.contact_info}>
              <strong>Gedeon Medical Center</strong>
              <p>
                Address: 11011 Sheridan Street, Suite 215, Cooper City, FL 33026
              </p>
              <p>Phone: 954-842-4285</p>
              <p>
                Email:{" "}
                <a href="mailto:info@gedeonmedicalcenter.com">
                  info@gedeonmedicalcenter.com
                </a>
              </p>
            </div>
            <hr />

            <h2>For More Details, Visit:</h2>
            <ul>
              <li>
                <a href="https://www.gedeonmedicalcenter.com/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.gedeonmedicalcenter.com/privacy-policy">
                  Terms of Service
                </a>
              </li>
            </ul>
          </article>
        </section>
        <div className={classes.gmc__privacy_image_container}>
          <Image
            src={logo}
            alt="GMC Logo"
            className={classes.gmc__privacy_footer_img}
          />
        </div>
      </main>
    </>
  );
}

export default PrivacyPolicy;
