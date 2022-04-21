import Image from "next/image";
import classes from "./about.module.css";
import utils from "../../styles/utils.module.css";
import SectionTitle from "../../components/ui/section-title/section-title";
import nurse from "../../public/images/illus-doctor-child.svg";
import Button from "../../components/ui/button/button";
import DotsAbout from "../../components/ui/dots/about/dots-about";
import { motion, useViewportScroll } from "framer-motion";

function About() {
  const { scrollYProgress } = useViewportScroll();

  return (
    <section
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
            With years of experience, our medical team will assess you and
            create a custom recovery plan that&apos;s right for you. We
            understand the importance of educating you on the most effective
            ways to take care of your body, so that you can heal quickly.
          </p>
          <Button label="learn more" />
        </div>
      </div>
      <DotsAbout />
    </section>
  );
}

export default About;
