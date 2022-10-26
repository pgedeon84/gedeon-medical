import classes from "./insurances.module.css";

function Insurances() {
  return (
    <div className={classes.gmc__insurances}>
      <div className={classes.gmc__insurances_content}>
        <h1>Accepted Insurances</h1>
        <p>More insurances will be added as they become available</p>
      </div>
      <div className={classes.gmc__insrances_images}>{/* images */}</div>
    </div>
  );
}

export default Insurances;
