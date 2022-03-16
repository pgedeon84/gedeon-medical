import classes from "./proof.module.css";
import Image from "next/image";
import medicare from "../../public/images/medicare.png";
import cigna from "../../public/images/cigna.png";
import blue_cross from "../../public/images/blue-cross.png";
import united from "../../public/images/united.png";

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
