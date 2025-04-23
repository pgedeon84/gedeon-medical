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
  const insuranceProviders = [
    { src: blue_cross, alt: "Blue Cross Blue Shield" },
    { src: brightHealth, alt: "Bright Health" },
    { src: medicare, alt: "Medicare" },
    { src: mhn, alt: "Memorial Healthcare Network" },
    { src: medicade, alt: "Medicaid" },
    { src: sunshineHealth, alt: "Sunshine Health" },
    { src: devoted, alt: "Devoted Health" },
    { src: cigna, alt: "Cigna" },
    { src: solis, alt: "Solis Health" },
    { src: oscar, alt: "Oscar Health" },
    { src: simplyHealthCare, alt: "Simply Healthcare" },
    { src: aetna, alt: "Aetna" },
  ];

  return (
    <section className={classes.gmc__proof_section}>
      <h2 className={classes.gmc__proof_title}>Accepted Insurances</h2>
      <div className={classes.gmc__proof}>
        {insuranceProviders.map((provider, index) => (
          <div key={index}>
            <Image
              src={provider.src}
              alt={provider.alt}
              priority={index < 6} // Only priority load first 6 images
              className={classes.gmc__proof_img}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proof;
