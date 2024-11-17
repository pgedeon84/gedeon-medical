import classes from "./proof.module.css";
import Image from "next/image";
import medicare from "../../public/images/medicare.svg";
import cigna from "../../public/images/cigna.svg";
import blue_cross from "../../public/images/blue-cross.svg";
import medicade from "../../public/images/Medicade.svg";
import oscar from "../../public/images/oscar.svg";
import mhn from "../../public/images/memorial-health-network.svg";
import brightHealth from "../../public/images/BrightHealth.svg";
import solis from "../../public/images/SolisHealth.svg";
import devoted from "../../public/images/DevotedHealth.svg";
import sunshineHealth from "../../public/images/sunshine_health.svg";
import simplyHealthCare from "../../public/images/SimplyHealthCare.svg";
import aetna from "../../public/images/Aetna.svg";

function Proof() {
  return (
    <>
      <p className={classes.gmc__proof_title}>Accepted Insurances</p>
      <div className={classes.gmc__proof}>
        <div>
          <Image
            src={blue_cross}
            alt="blue-cross insurance"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={brightHealth}
            alt="bright health care"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={medicare}
            alt="medicare insurance"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={mhn}
            alt="memorial healthcare network"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={medicade}
            alt="medicade insurance"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={sunshineHealth}
            alt="sunshine health insurance"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={devoted}
            alt="devoted health insurance"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={cigna}
            alt="cigna insurance"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={solis}
            alt="solis insurance"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={oscar}
            alt="oscar insurance"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={simplyHealthCare}
            alt="simply healthcare insurance"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
        <div>
          <Image
            src={aetna}
            alt="aetna insurance"
            priority
            className={classes.gmc__proof_img}
          />
        </div>
      </div>
    </>
  );
}

export default Proof;
