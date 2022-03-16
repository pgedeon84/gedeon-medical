import classes from "./stars.module.css";
import { RiStarFill } from "react-icons/ri";

function Stars({ hexColor }) {
  const color = hexColor;

  return (
    <div className={classes.gmc__stars_container}>
      <span>
        <RiStarFill style={{ color: color }} />
      </span>
      <span>
        <RiStarFill style={{ color: color }} />
      </span>
      <span>
        <RiStarFill style={{ color: color }} />
      </span>
      <span>
        <RiStarFill style={{ color: color }} />
      </span>
      <span>
        <RiStarFill style={{ color: color }} />
      </span>
    </div>
  );
}

export default Stars;
