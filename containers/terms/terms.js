import SectionTitle from "../../components/ui/section-title/section-title";
import classes from "./terms.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/ui/animatedSection";
import AnimatedItem from "../../components/ui/animatedItem";

function Terms() {
  return (
    <section id="gmc_communications" className={classes.gmc__terms_section}>
      <AnimatedItem className={classes.gmc__terms_header}>
        <SectionTitle title="GMC Communications" />
      </AnimatedItem>

      <AnimatedItem className={classes.gmc__terms_content}>
        <motion.h3
          className={classes.terms_title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          Text Messaging (SMS) Application Terms and Conditions
        </motion.h3>

        <motion.p
          className={classes.terms_paragraph}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <strong>Gedeon Medical Center (GMC)</strong> uses MyChart by Epic -
          provided by Memorial Healthcare System.
        </motion.p>

        <motion.p
          className={classes.terms_paragraph}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <strong>Signing up</strong> for MyChart allows the following:
        </motion.p>

        <motion.ul
          className={classes.gmc__terms_list}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Access to your medical records
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Electronic communication with providers and staff
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Scheduling
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
          >
            And more!
          </motion.li>
        </motion.ul>

        <motion.p
          className={classes.terms_paragraph}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Use the following link to sign up for:{" "}
          <Link
            href="https://mychart.mhs.net/mychart/Authentication/Login"
            className={classes.gmc__terms_chart}
          >
            <strong>MyChart</strong>
          </Link>
        </motion.p>

        <motion.div
          className={classes.terms_text_block}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>MyChart</strong> application allows patients to receive text
            message alerts related to their GMC visits, MyChart account,
            one-time passcode, Memorial Healthcare System's billing
            notifications, prescription reminders, test results, and care
            management, subject to your compliance with the terms, conditions,
            and notices set forth below. Memorial Healthcare Systems reserves
            the right to limit or terminate your use of the SMS Application if
            you fail to abide by the Terms and Conditions.
          </p>
          <p>
            <strong>GMC</strong> also uses SMS text messaging to communicate
            limited information upon consent.
          </p>
          <p>
            <strong>Acceptance of Terms and Conditions</strong>
            <br />
            By enrolling or otherwise agreeing to participate in the SMS
            Application, you agree to be bound by these terms and conditions of
            use ("Terms and Conditions"). GMC may revise these Terms and
            Conditions at any time by updating this document on its applicable
            website. If you use the SMS Application after such revisions have
            been made, you will be bound by the revised Terms and Conditions. If
            you disagree with these Terms and Conditions, please text STOP at
            any time to opt out of the SMS Application.
          </p>
          <p>
            <strong>Disclosures</strong>
            <br />
            Information gathered in the SMS Application will not be shared for
            Marketing Purposes. You agree and understand the risks associated
            with sending and receiving your protected health information via
            text messages and that such electronic communications may not be
            secure. You understand that your consent to participate in the SMS
            Application is not a condition of any treatment. How to Opt Out and
            Get Help If you choose to no longer receive text messages from GMC,
            reply STOP to our text messages.{" "}
            <Link
              href="https://mychart.mhs.net/mychart/Authentication/Login"
              className={classes.gmc__terms_chart}
            >
              <strong>MyChart</strong>
            </Link>
          </p>
        </motion.div>
      </AnimatedItem>
    </section>
  );
}

export default Terms;
