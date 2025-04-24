import { motion } from "framer-motion";
import classes from "./services.module.css";
import utils from "../../styles/utils.module.css";
import Card from "../../components/card/card";
import SectionTitle from "../../components/ui/section-title/section-title";
import generalCare from "../../public/images/general-care.svg";
import cosmeticCare from "../../public/images/cosmetic-care.svg";

function Services() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardItem = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  const iconAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  // Viewport settings
  const viewportSettings = {
    once: true, // Only trigger animation once
    amount: 0.2, // Trigger when 20% of element is visible
    margin: "0px 0px -100px 0px", // Adjust trigger point
  };

  return (
    <motion.section
      id="services"
      className={`${classes.gmc__service} ${utils.section__padding}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={container}
    >
      <motion.div className={classes.gmc__service_header} variants={item}>
        <SectionTitle title="Services" />
      </motion.div>

      <motion.div
        className={classes.gmc__service_card__container}
        variants={container}
      >
        <motion.div
          variants={cardItem}
          viewport={viewportSettings}
          whileInView="visible"
          initial="hidden"
        >
          <Card title="General Health Care" image={generalCare}>
            <motion.li
              variants={item}
              viewport={viewportSettings}
              whileInView="visible"
              initial="hidden"
            >
              <motion.span
                variants={iconAnimation}
                viewport={viewportSettings}
                whileInView="visible"
                initial="hidden"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG paths remain the same */}
                </svg>
              </motion.span>
              Primary Care and Prevention
            </motion.li>

            <motion.li
              variants={item}
              viewport={viewportSettings}
              whileInView="visible"
              initial="hidden"
            >
              <motion.span
                variants={iconAnimation}
                viewport={viewportSettings}
                whileInView="visible"
                initial="hidden"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG paths remain the same */}
                </svg>
              </motion.span>
              Management of chronic disease including diabetes and hypertension
            </motion.li>
          </Card>
        </motion.div>

        <motion.div
          variants={cardItem}
          viewport={viewportSettings}
          whileInView="visible"
          initial="hidden"
        >
          <Card title="Cosmetic Health Care" image={cosmeticCare}>
            <motion.li
              variants={item}
              viewport={viewportSettings}
              whileInView="visible"
              initial="hidden"
            >
              <motion.span
                variants={iconAnimation}
                viewport={viewportSettings}
                whileInView="visible"
                initial="hidden"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 56 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG paths remain the same */}
                </svg>
              </motion.span>
              Weight Loss
            </motion.li>

            <motion.li
              variants={item}
              viewport={viewportSettings}
              whileInView="visible"
              initial="hidden"
            >
              <motion.span
                variants={iconAnimation}
                viewport={viewportSettings}
                whileInView="visible"
                initial="hidden"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG paths remain the same */}
                </svg>
              </motion.span>
              Anti-aging including testosterone replacement therapy, Botox,
              fillers
            </motion.li>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Services;
