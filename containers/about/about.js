import Image from "next/image";
import classes from "./about.module.css";
import utils from "../../styles/utils.module.css";
import AboutCard from "../../components/about-card/about-card";
import SectionTitle from "../../components/ui/section-title/section-title";
import nurse from "../../public/images/illus-doctor-child.svg";
import medicalIcon from "../../public/images/medical-icon.svg";
import physiciansIcon from "../../public/images/physicians-icon.svg";
import experienceIcon from "../../public/images/experience-icon.svg";
import telehealthIcon from "../../public/images/telehealth-icon.svg";
import Button from "../../components/ui/button/button";
import AnimatedSection from "../../components/ui/animatedSection";
import AnimatedItem from "../../components/ui/animatedItem";
import { scrollAnimation } from "../../utils/animations"; // Add this import

function About() {
  const cards = [
    {
      imgSrc: medicalIcon,
      title: "Our Health Mission",
      description:
        "Our experienced medical professionals put your healing needs first. We are proud to provide a high quality level of customer service, medical experience, and commitment to health and wellness to all our patients. Our goal is to make you feel better as quickly as possible.",
    },
    {
      imgSrc: physiciansIcon,
      title: "Physicians Who Care",
      description:
        "Not only will our doctors treat your existing conditions, we also work to maximize your prevention strategies. We strive to help you improve your quality of life, achieve your wellness goals, and support your best possible life.",
    },
    {
      imgSrc: experienceIcon,
      title: "Experience",
      description:
        "With years of experience, our medical team will assess you and create a custom recovery plan that's right for you. We understand the importance of educating you on the most effective ways to take care of your body, so that you can heal quickly.",
    },
    {
      imgSrc: telehealthIcon,
      title: "Telehealth",
      description:
        "Sometimes there are obstacles to coming into a medical office, but help is still available. Our doctors can meet you over a HIPAA compliant connection. Same day appointments available!",
    },
  ];

  return (
    <AnimatedSection
      id="about"
      className={`${classes.gmc__about} ${utils.section__padding}`}
    >
      <AnimatedItem className={classes.gmc__about_header}>
        <SectionTitle title="WELCOME TO GEDEON MEDICAL CENTER" />
        <p>
          11011 SHERIDAN STREET, SUITE 215, COOPER CITY, FLORIDA 33026, UNITED
          STATES
        </p>
        <p>
          <b>954-842-4285</b>
        </p>
      </AnimatedItem>

      <AnimatedItem
        className={classes.gmc__about_content__container}
        variant="card"
      >
        <AnimatedItem
          className={classes.gmc__about_content__image}
          variant="icon"
        >
          <Image src={nurse} alt="nurse" />
        </AnimatedItem>
        <AnimatedItem className={classes.gmc__about_content}>
          <p>
            With years of experience, our medical team will assess you and
            create a custom recovery plan that&apos;s right for you. We
            understand the importance of educating you on the most effective
            ways to take care of your body, so that you can heal quickly.
          </p>
          <Button label="learn more" />
        </AnimatedItem>
      </AnimatedItem>

      <AnimatedItem
        className={classes.gmc__about_aboutCard__container}
        variants={scrollAnimation.container}
      >
        {cards.map((card, index) => (
          <AnimatedItem
            key={index}
            variants={scrollAnimation.card}
            className={classes.gmc__about_cardWrapper}
          >
            <AboutCard
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
              className={classes.gmc__about_aboutCard}
            />
          </AnimatedItem>
        ))}
      </AnimatedItem>
    </AnimatedSection>
  );
}

export default About;
