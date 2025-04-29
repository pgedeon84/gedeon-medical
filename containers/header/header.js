import { motion } from "framer-motion";
import classes from "./header.module.css";
import Image from "next/image";
import illustration from "../../public/images/banner-img.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import utils from "../../styles/utils.module.css";
import Link from "next/link";

function Header() {
  // Animation configuration (consistent with other components)
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  const underlineAnimation = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "36px",
      opacity: 1,
      transition: { duration: 0.8, ease: "circOut", delay: 0.6 },
    },
  };

  return (
    <motion.header
      className={classes.gmc__header}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
    >
      <motion.div
        className={classes.gmc__header_content}
        variants={containerVariants}
      >
        <motion.h1 variants={fadeInUp}>
          Gedeon <br /> Medical Center
          <motion.span
            className={classes.underline}
            variants={underlineAnimation}
          />
        </motion.h1>

        <motion.p variants={fadeInUp}>
          Get started on your path to health!
        </motion.p>

        <div className={classes.gmc__header_content__trust_container}>
          <motion.div
            className={classes.gmc__header_content__trust_container_item}
            variants={fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
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
            </motion.div>
            <motion.p variants={fadeInUp}>
              Over 120,000 patients cared for
            </motion.p>
          </motion.div>

          <motion.div
            className={classes.gmc__header_content__trust_container_item}
            variants={fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
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
            </motion.div>
            <motion.p variants={fadeInUp}>
              Medical Board Certified Doctor
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeInUp}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <button className={classes.gmc__header_content_button}>
            <Link href="/#gmc_book-now" passHref>
              Book Now
            </Link>
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Image */}
      <motion.div
        className={classes.gmc__header_image_sm}
        variants={imageAnimation}
      >
        <Image
          src={illustration}
          alt="Medical illustration"
          priority
          className={classes.gmc__header_image_sm_size}
        />
      </motion.div>

      {/* Desktop Image */}
      <motion.div
        className={classes.gmc__header_image_lg}
        variants={imageAnimation}
      >
        <Image
          src={illustration}
          alt="Medical illustration"
          priority
          className={classes.gmc__header_image_lg_size}
        />
      </motion.div>
    </motion.header>
  );
}

export default Header;
