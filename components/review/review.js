import classes from "./review.module.css";
import Stars from "../ui/stars/stars";

function Review({ name, review, date }) {
  return (
    <li className={classes.gmc__review_card}>
      <div className={classes.gmc__review_card__content}>
        <Stars hexColor={"#F6B703"} />
        <p className={classes.gmc__review_card__content__review}>{review}</p>
        <p className={classes.gmc__review_card__content__link}>More details</p>
        <p className={classes.gmc__review_card__content__name}>
          {name}
          {" -"}
          <span>
            <date> {date}</date>
          </span>
        </p>
      </div>
    </li>
  );
}

export default Review;
