import classes from "./bio.module.css";
import Image from "next/image";
import SectionTitle from "../../components/ui/section-title/section-title";
import doctor from "../../public/images/doctor.svg";
import wave from "../../public/images/wave_alt.svg";
import Stars from "../../components/ui/stars/stars";
// import DotsBio from "../../components/ui/dots/bio/dots-bio";

function Bio() {
  return (
    <section id="meetthedoc" className={classes.gmc__bio}>
      {/* <DotsBio /> */}
      {/* <div className={classes.gmc__bio_header}>
        <SectionTitle title="meet the doc" />
      </div> */}
      <div>
        {/* <Image src={wave} alt="wave" className={classes.gmc__bio_img_wave} /> */}
      </div>
      {/* <div className={classes.gmc__bio_content}>
          <div className={classes.gmc__bio_content_container}>
            <div className={classes.gmc__bio_content_container__image}>
              <Image src={doctor} alt="Doctor Gedeon" />
            </div>
            <div className={classes.gmc__bio_content_container__content}>
              <h1>Dr. Leon S. Gedeon</h1>
              <p>Primary Care - Family Medicine</p>
              <div className={classes.gmc__bio_content_container__content_rating}>
                <p>Patient Experience Rating -</p>
                <Stars hexColor={"#F6B703"} />
              </div>
              <p>U.S. News and World Report</p>
            </div>
          </div>
        <p>
          Dr. Leon Stephane Gedeon is a board-certified family practitioner that
          takes a holistic approach to providing care that focuses on
          preventing, rather than primarily treating illnesses. “Often, patients
          don&apos;t feel sick until they&apos;re very sick, as is the case with
          diabetes and high blood pressure.” Among my roles as a primary care
          physician are to help patients understand the benefits of preventive
          medicine, teach them about their illnesses, and together develop a
          plan to manage their problems before they worsen or develop other
          issues.” Dr. Gedeon is tri-lingual (English, French, Haitian Creole)
          and provides patients a medical home where they can take ownership of
          their care and avoid using the emergency room for non-emergent medical
          problems. He does this by establishing trust, often with the entire
          family, and providing patients with care plans they can implement.
          After earning a medical degree from the Ross University School of
          Medicine in Dominica, Dr. Gedeon completed Family Medicine residency
          at Cleveland Clinic Akron General in Akron, Ohio.
        </p>
      </div> */}
    </section>
  );
}

export default Bio;
