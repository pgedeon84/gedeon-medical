import SectionTitle from "../../components/ui/section-title/section-title";
import classes from "./privacy-policy.module.css";
import Link from "next/link";

function PrivacyPolicy() {
  return (
    <div className={classes.gmc__privacy_container}>
      <SectionTitle title="Privacy Policy" />
      <div className={classes.gmc__privacy_link}>
        <Link href="/privacy-policy" passHref className={classes.privacy_link}>
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
