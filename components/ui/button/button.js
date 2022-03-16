import classes from "./button.module.css";
import utils from "../../../styles/utils.module.css";

function Button({ label }) {
  return (
    <button
      className={`${classes.gmc__button} ${utils.gradient_animation}`}
      type="button"
    >
      {label}
    </button>
  );
}

export default Button;
