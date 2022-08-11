import classes from "./about-card.module.css";
import Image from "next/image";

function AboutCard(props) {
  return (
    <div className={classes.gmc__aboutCard}>
      <div className={classes.gmc__aboutCard_icon}>
        <Image src={props.imgSrc} alt="icon" layout="responsive" />
      </div>
      <h3 className={classes.gmc__aboutCard_title}>{props.title}</h3>
      <p className={classes.gmc__aboutCard_description}>{props.description}</p>
    </div>
  );
}

export default AboutCard;
