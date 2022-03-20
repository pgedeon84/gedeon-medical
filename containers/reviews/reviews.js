import classes from "./reviews.module.css";
import SectionTitle from "../../components/ui/section-title/section-title";
import Review from "../../components/review/review";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// install Swiper modules
SwiperCore.use([Scrollbar]);

function Reviews() {
  const reviewsList = [
    {
      patientName: "Noel",
      patientReview:
        "Dr. Gedeon is the perfect mix of professional, personable, and patient. He took the time to get to know my father and even personally repeated his blood pressure manually. I would happily recommend family and friends to Dr. Gedeon.",
      date: "Dec 08, 2021",
      key: Math.random(),
    },
    {
      patientName: "Noel",
      patientReview:
        "Dr. Gedeon is the perfect mix of professional, personable, and patient. He took the time to get to know my father and even personally repeated his blood pressure manually. I would happily recommend family and friends to Dr. Gedeon.",
      date: "Dec 08, 2021",
      key: Math.random(),
    },
    {
      patientName: "Noel",
      patientReview:
        "Dr. Gedeon is the perfect mix of professional, personable, and patient. He took the time to get to know my father and even personally repeated his blood pressure manually. I would happily recommend family and friends to Dr. Gedeon.",
      date: "Dec 08, 2021",
      key: Math.random(),
    },
  ];

  return (
    <section id="reviews" className={classes.gmc__reviews}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#385CAD"
          d="M0,288L120,256C240,224,480,160,720,122.7C960,85,1200,75,1320,69.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <div className={classes.gmc__reviews_container}>
        <SectionTitle title={"Patient Reviews"} />
        <div className={classes.gmc__reviews__review_swiper__container}>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation
          >
            <ul>
              {reviewsList.map((review) => (
                <SwiperSlide key={review.key}>
                  <Review
                    name={review.patientName}
                    review={review.patientReview}
                    date={review.date}
                  />
                </SwiperSlide>
              ))}
              ;
            </ul>
          </Swiper>
          <p>see more reviews</p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
