import SectionTitle from "../../components/ui/section-title/section-title";
import classes from "./privacy-policy.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedItem from "../../components/ui/animatedItem";

function SMSTerms() {
  return (
    <section id="gmc_sms-terms" className={classes.gmc__terms_section}>
      <AnimatedItem className={classes.gmc__terms_header}>
        <SectionTitle title="SMS Terms & Conditions" />
      </AnimatedItem>

      <AnimatedItem className={classes.gmc__terms_content}>
        {/* <motion.h3
          className={classes.terms_title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          SMS Communication Policy
        </motion.h3> */}

        <p className={classes.terms_paragraph}>
          <span className={classes.terms_highlight}>SMS CONSENT:</span> The
          information obtained by filling the consent form as part of the SMS
          consent process will not be shared with third parties for marketing
          purposes.
        </p>

        <p className={classes.terms_paragraph}>
          Upon consenting to receive text messages from Gedeon Medical Center,
          you may receive communications related to:
        </p>

        <ul className={classes.terms_list}>
          <li>Appointment reminders</li>
          <li>Test results</li>
          <li>Referral, order, and prescription notifications</li>
          <li>Practice updates</li>
        </ul>

        <div className={classes.terms_text_block}>
          <h4 className={classes.terms_subheader}>Key Information</h4>

          <p className={classes.terms_paragraph}>
            <span className={classes.terms_highlight}>Message Frequency:</span>{" "}
            Our SMS message frequency is estimated to be 0-4 text messages daily
            across all users.
          </p>

          <p className={classes.terms_paragraph}>
            <span className={classes.terms_highlight}>Potential Fees:</span>{" "}
            Carriers may charge fees for each message sent or received. These
            fees can vary based on the carrier&apos;s pricing structure and
            whether the message is sent domestically or internationally.
          </p>

          <h4 className={classes.terms_subheader}>Consent Process</h4>

          <p className={classes.terms_paragraph}>
            <span className={classes.terms_highlight}>How to Opt-In:</span>{" "}
            Customers may opt-in for SMS messaging from Gedeon Medical Center:
          </p>

          <ul className={classes.terms_list}>
            <li>Verbally during a call to our office (954-842-4285)</li>
            <li>
              Through our website{" "}
              <Link href="/consent-form" className={classes.terms_link}>
                GMC Consent Form
              </Link>
            </li>
          </ul>

          <p className={classes.terms_paragraph}>
            During the call, customers will be asked: &quot;Do you agree to
            receive texts from Gedeon Medical Center? Message frequency varies.
            Message and data rates may apply. Text HELP for help, text STOP to
            opt-out.&quot; On our website, customers may opt-in by checking the
            box allowing consent on the consent form. This consent agreement
            will not be shared with third parties and affiliates for marketing
            purposes. No SMS communication will be initiated without customer
            consent.
          </p>

          <p className={classes.terms_paragraph}>
            <span className={classes.terms_highlight}>How to Opt-Out:</span>{" "}
            Customers can opt-out of SMS messaging from Gedeon Medical Center by
            replying STOP at any time to any received SMS message. Once
            opted-out, they will receive no further SMS communication. Customers
            can opt back in at any time by replying START.
          </p>

          <h4 className={classes.terms_subheader}>Help Instructions</h4>

          <p className={classes.terms_paragraph}>
            For assistance, text HELP or call our office at 954-842-4285.
          </p>

          <h4 className={classes.terms_subheader}>
            Standard Messaging Disclosures
          </h4>

          <ul className={classes.terms_list}>
            <li>
              Standard message and data rates may apply based on your mobile
              carrier plan
            </li>
            <li>Messaging frequency may vary</li>
            <li>To opt out at any time, text STOP</li>
          </ul>
          <p className={classes.terms_paragraph}>
            For more information, please review our{" "}
            <Link
              href="/privacy-policy"
              className={classes.terms_link}
              passHref
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </AnimatedItem>
    </section>
  );
}

export default SMSTerms;
