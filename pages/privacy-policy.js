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
        <title>Gedeon Medical Center | Book an appointment</title>
      </Head>
      <main>
        <Navbar />
        <div className={classes.container}>
          <h1 className={classes.header}>Privacy Policy</h1>
          <div className={classes.content}>
            <p>
              MyChart usage - Please click on the following link to view
              Memorial Healthcare System's{" "}
              <Link
                href="https://www.mhs.net/privacy-and-security"
                className={classes.privacy_link}
              >
                privacy policy
              </Link>
            </p>
            <div className={classes.emphasis}>
              GMC SMS usage - SMS consent and telephone numbers will not be
              shared with any third party.
            </div>
          </div>
        </div>
        <div className={classes.image_container}>
          <Image
            src={logo}
            alt="GMC Logo"
            className={classes.gmc__footer_img}
          />
        </div>
      </main>
    </>
  );
}

export default PrivacyPolicy;
