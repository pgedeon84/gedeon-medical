import classes from "./header.module.css";
import Image from "next/image";
import DotsHeader from "../../components/ui/dots/header/dots-header";
import illustration from "../../public/images/illus-doctor-nurse2.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import utils from "../../styles/utils.module.css";
import Link from "next/link";

import { motion } from "framer-motion";

function Header() {
  // Framer Motion props
  const fadeIn = {
    hidden: { opacity: 0.3 },
    visible: { opacity: 1 },
  };

  return (
    <header className={classes.gmc__header}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className={classes.gmc__header_content}
      >
        <h1>
          Gedeon <br /> Medical Center
        </h1>
        <p>Get started on your path to health!</p>
        <div className={classes.gmc__header_content__trust_container}>
          <div className={classes.gmc__header_content__trust_container_item}>
            <svg
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 27C20.944 27 27 20.944 27 13.5C27 6.05602 20.944 0 13.5 0C6.05602 0 0 6.05602 0 13.5C0 20.944 6.05602 27 13.5 27ZM8.24259 12.7697L11.1763 15.6676L18.1575 7.05375L20.3057 8.94839L11.4029 19.9323L6.3083 14.9015L8.24259 12.7697Z"
                fill="#6abf4b"
              />
            </svg>
            <p>Over 120,000 patients cared for</p>
          </div>
          <div className={classes.gmc__header_content__trust_container_item}>
            <svg
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 27C20.944 27 27 20.944 27 13.5C27 6.05602 20.944 0 13.5 0C6.05602 0 0 6.05602 0 13.5C0 20.944 6.05602 27 13.5 27ZM8.24259 12.7697L11.1763 15.6676L18.1575 7.05375L20.3057 8.94839L11.4029 19.9323L6.3083 14.9015L8.24259 12.7697Z"
                fill="#6abf4b"
              />
            </svg>
            <p>Medical Board Certified Doctor</p>
          </div>
        </div>
        <Link href="#contact" passHref>
          <button className={utils.gradient_animation} type="button">
            Book an Appointment
            <span>
              <RiArrowRightSLine
                className={classes.gmc__header_content__button_icon}
              />
            </span>
          </button>
        </Link>
        <DotsHeader />
      </motion.div>
      <div className={classes.gmc__header_image_sm}>
        <Image src={illustration} alt="Nurses" layout="responsive" priority />
      </div>
      <div className={classes.gmc__header_image_lg}>
        <Image src={illustration} alt="Nurses" layout="responsive" priority />
      </div>
    </header>
  );
}

export default Header;
