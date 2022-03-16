import classes from "./section-title.module.css";

function SectionTitle({ title }) {
  return (
    <div className={classes.gmc_section_title}>
      <h1>{title}</h1>
    </div>
  );
}

export default SectionTitle;
