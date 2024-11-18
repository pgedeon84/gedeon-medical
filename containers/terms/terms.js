import SectionTitle from "../../components/ui/section-title/section-title";
import classes from "./terms.module.css";
import Link from "next/link";

function Terms() {
  return (
    <section id="gmc_communications" className={classes.gmc__terms_section}>
      <div className={classes.gmc__terms_header}>
        <SectionTitle title="GMC Communications" />
      </div>
      <div className={classes.gmc__terms_content}>
        <h3>
          Text Messaging (SMS) Application Terms and Conditions <br /> <br />
        </h3>{" "}
        <p>
          <b>Gedeon Medical Center (GMC)</b> uses MyChart by Epic - provided by
          Memorial Healthcare System. <br /> <br />
          <b>Signing up</b> for MyChart allows the following: <br /> <br />
        </p>
        <ul className={classes.gmc__terms_list}>
          <li>Access to your medical records</li>
          <li>⁠Electronic communication with providers and staff</li>
          <li>Scheduling</li>
          <li>And more! </li>{" "}
        </ul>
        <br />
        <p>
          Use the following link to sign up for: &nbsp;
          <Link
            href="https://mychart.mhs.net/mychart/Authentication/Login"
            className={classes.gmc__terms_chart}
          >
            MyChart
          </Link>
        </p>
        <p>
          {" "}
          <b>MyChart</b> application allows patients to receive text message
          alerts related to their GMC visits, MyChart account, one-time
          passcode, Memorial Healthcare System's billing notifications,
          prescription reminders, test results, and care management, subject to
          your compliance with the terms, conditions, and notices set forth
          below. Memorial Healthcare Systems reserves the right to limit or
          terminate your use of the SMS Application if you fail to abide by the
          Terms and Conditions. <br />
          <br />
          <b>GMC</b> also uses SMS text messaging to communicate limited
          information upon consent.
          <br /> <br /> <b>Acceptance of Terms and Conditions</b> <br /> <br />
          By enrolling or otherwise agreeing to participate in the SMS
          Application, you agree to be bound by these terms and conditions of
          use (“Terms and Conditions”). GMC may revise these Terms and
          Conditions at any time by updating this document on its applicable
          website. If you use the SMS Application after such revisions have been
          made, you will be bound by the revised Terms and Conditions. If you
          disagree with these Terms and Conditions, please text STOP at any time
          to opt out of the SMS Application. <br />
          <br />
          <b>Disclosures</b> <br /> <br />
          Information gathered in the SMS Application will not be shared for
          Marketing Purposes. You agree and understand the risks associated with
          sending and receiving your protected health information via text
          messages and that such electronic communications may not be secure.
          You understand that your consent to participate in the SMS Application
          is not a condition of any treatment. How to Opt Out and Get Help If
          you choose to no longer receive text messages from GMC, reply STOP to
          our text messages. &nbsp;
          <Link
            href="https://mychart.mhs.net/mychart/Authentication/Login"
            className={classes.gmc__terms_chart}
          >
            MyChart
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Terms;
