import { motion } from "framer-motion";
import classes from "./header.module.css";
import Image from "next/image";
import illustration from "../../public/images/banner-img.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import utils from "../../styles/utils.module.css";
import Link from "next/link";

function Header() {
  // Animation variants - optimized for SVG performance
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom bezier curve for smoother motion
      },
    },
  };

  const imageAnimation = {
    hidden: {
      scale: 0.98,
      opacity: 0,
      filter: "blur(4px)",
    },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4,
      },
    },
  };

  const underlineAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    visible: {
      width: "36px",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "circOut",
        delay: 0.3,
      },
    },
  };

  // Special variant for SVG elements
  const svgItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.header
      className={classes.gmc__header}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div className={classes.gmc__header_content} variants={container}>
        <motion.h1 variants={item}>
          Gedeon <br /> Medical Center
          <motion.span
            className={classes.underline}
            variants={underlineAnimation}
          />
        </motion.h1>

        <motion.p variants={item}>Get started on your path to health!</motion.p>

        <div className={classes.gmc__header_content__trust_container}>
          <motion.div
            className={classes.gmc__header_content__trust_container_item}
            variants={item}
          >
            <motion.svg
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgItem}
              custom={0} // Delay index
            >
              <path
                d="M13.5 27C20.944 27 27 20.944 27 13.5C27 6.05602 20.944 0 13.5 0C6.05602 0 0 6.05602 0 13.5C0 20.944 6.05602 27 13.5 27ZM8.24259 12.7697L11.1763 15.6676L18.1575 7.05375L20.3057 8.94839L11.4029 19.9323L6.3083 14.9015L8.24259 12.7697Z"
                fill="#6abf4b"
              />
            </motion.svg>
            <motion.p variants={item}>Over 120,000 patients cared for</motion.p>
          </motion.div>

          <motion.div
            className={classes.gmc__header_content__trust_container_item}
            variants={item}
          >
            <motion.svg
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgItem}
              custom={1} // Delay index
            >
              <path
                d="M13.5 27C20.944 27 27 20.944 27 13.5C27 6.05602 20.944 0 13.5 0C6.05602 0 0 6.05602 0 13.5C0 20.944 6.05602 27 13.5 27ZM8.24259 12.7697L11.1763 15.6676L18.1575 7.05375L20.3057 8.94839L11.4029 19.9323L6.3083 14.9015L8.24259 12.7697Z"
                fill="#6abf4b"
              />
            </motion.svg>
            <motion.p variants={item}>Medical Board Certified Doctor</motion.p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={classes.gmc__header_image_sm}
        variants={imageAnimation}
      >
        <Image
          src={illustration}
          alt="Nurses"
          priority
          className={classes.gmc__header_image_sm_size}
        />
      </motion.div>

      <motion.div
        className={classes.gmc__header_image_lg}
        variants={imageAnimation}
      >
        <Image
          src={illustration}
          alt="Nurses"
          priority
          className={classes.gmc__header_image_lg_size}
        />
      </motion.div>
    </motion.header>
  );
}

export default Header;
