import classes from "./bio.module.css";
import Image from "next/image";
import SectionTitle from "../../components/ui/section-title/section-title";
import doctor from "../../public/images/doctor.svg";
import wave from "../../public/images/wave_alt.svg";
import Stars from "../../components/ui/stars/stars";
import { motion } from "framer-motion";
import AnimatedItem from "../../components/ui/animatedItem";

function Bio() {
  return (
    <section id="meetthedoc" className={classes.gmc__bio}>
      {/* Static header */}
      <AnimatedItem className={classes.gmc__bio_header}>
        <SectionTitle title="meet the doc" />
      </AnimatedItem>

      {/* Wave decoration - subtle animation */}
      <motion.div
        className={classes.gmc__bio_wave_container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={wave}
          alt="wave decoration"
          className={classes.gmc__bio_img_wave}
          width={1440}
          height={100}
          priority
        />
      </motion.div>

      {/* Animated content */}
      <motion.div
        className={classes.gmc__bio_content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              when: "beforeChildren",
            },
          },
        }}
      >
        <motion.div
          className={classes.gmc__bio_content_container}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <motion.div
            className={classes.gmc__bio_content_container__image}
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 100 },
              },
            }}
          >
            <Image
              src={doctor}
              alt="Doctor Gedeon"
              width={300}
              height={400}
              priority
            />
          </motion.div>

          <motion.div
            className={classes.gmc__bio_content_container__content}
            variants={{
              hidden: { x: 50, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 100 },
              },
            }}
          >
            <motion.h1
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              Dr. Leon S. Gedeon
            </motion.h1>
            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              Primary Care - Family Medicine
            </motion.p>
            <motion.div
              className={classes.gmc__bio_content_container__content_rating}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <p>Patient Experience Rating -</p>
              <Stars hexColor="#F6B703" />
            </motion.div>
            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              U.S. News and World Report
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.p
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { delay: 0.4 },
            },
          }}
        >
          Dr. Leon Stephane Gedeon is a board-certified family practitioner that
          takes a holistic approach to providing care that focuses on
          preventing, rather than primarily treating illnesses. Often, patients
          don&apos;t feel sick until they&apos;re very sick, as is the case with
          diabetes and high blood pressure. Among my roles as a primary care
          physician are to help patients understand the benefits of preventive
          medicine, teach them about their illnesses, and together develop a
          plan to manage their problems before they worsen or develop other
          issues. Dr. Gedeon is tri-lingual (English, French, Haitian Creole)
          and provides patients a medical home where they can take ownership of
          their care and avoid using the emergency room for non-emergent medical
          problems. He does this by establishing trust, often with the entire
          family, and providing patients with care plans they can implement.
          After earning a medical degree from the Ross University School of
          Medicine in Dominica, Dr. Gedeon completed Family Medicine residency
          at Cleveland Clinic Akron General in Akron, Ohio.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Bio;
