import classes from "./card.module.css";
import Image from "next/image";
import Button from "../ui/button/button";

function Card(props) {
  const { title, image } = props;
  return (
    <div className={classes.gmc__card}>
      <div className={classes.gmc__card_img}>
        <Image src={image} alt={title} />
      </div>
      <div className={classes.gmc__card_content_container}>
        <h2>{title}</h2>
        <ul>{props.children}</ul>
        <Button label="learn more" />
      </div>
    </div>
  );
}

export default Card;
