import classes from "./proof.module.css";
import Image from "next/image";
import medicare from "../../public/images/medicare.svg";
import cigna from "../../public/images/cigna.svg";
import blue_cross from "../../public/images/blue-cross.svg";
import united from "../../public/images/united-healthcare.svg";

function Proof() {
  return (
    <div className={classes.gmc__proof}>
      <div>
        <Image
          src={blue_cross}
          alt="blue-cross insurance"
          layout="responsive"
        />
      </div>
      <div>
        <Image src={cigna} alt="cigna insurance" layout="responsive" />
      </div>
      <div>
        <Image src={united} alt="united insurance" layout="responsive" />
      </div>
      <div>
        <Image src={medicare} alt="medicare insurance" layout="responsive" />
      </div>
    </div>
  );
}

export default Proof;
