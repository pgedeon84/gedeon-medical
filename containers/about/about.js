import Image from "next/image";
import classes from "./about.module.css";
import utils from "../../styles/utils.module.css";
import SectionTitle from "../../components/ui/section-title/section-title";
import nurse from "../../public/images/nurse.png";
import Button from "../../components/ui/button/button";
import DotsLeft from "../../components/ui/dots-left/dots-left";

function About() {
  return (
    <div
      id="about"
      className={`${classes.gmc__about} ${utils.section__padding}`}
    >
      <div className={classes.gmc__about_header}>
        <SectionTitle title="WELCOME TO GEDEON MEDICAL CENTER" />
        <p>
          11011 SHERIDAN STREET, SUITE 215/216, COOPER CITY, FLORIDA 33026,
          UNITED STATES
        </p>
      </div>
      <div className={classes.gmc__about_content__container}>
        <div className={classes.gmc__about_content__image}>
          <Image src={nurse} alt="nurse" layout="responsive" />
        </div>
        <div className={classes.gmc__about_content}>
          <p>
            Not feeling well or just need an annual exam? We do it all! We also
            perform sports physicals and referrals for injuries. Whether
            you&apos;re sick or only need some routine maintenance, we&apos;re
            here for you!
          </p>
          <Button label="learn more" />
        </div>
      </div>
      <DotsLeft />
    </div>
  );
}

export default About;
