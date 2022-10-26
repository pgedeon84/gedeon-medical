import Head from "next/head";
import dynamic from "next/dynamic";
import { Navbar, Proof } from "../components";
import { Header } from "../containers";
import Insurances from "../containers/insurances/insurances";

const AboutLazy = dynamic(() => import("../containers/about/about"));
const ServicesLazy = dynamic(() => import("../containers/services/services"));
const BioLazy = dynamic(() => import("../containers/bio/bio"));
const ReviewsLazy = dynamic(() => import("../containers/reviews/reviews"));
const ContactLazy = dynamic(() => import("../containers/contact/contact"));
const InsurancesLazy = dynamic(() =>
  import("../containers/insurances/insurances")
);
const FooterLazy = dynamic(() => import("../containers/footer/footer"));

function Home() {
  return (
    <>
      <Head>
        <title>Gedeon Medical Center | Book an appointment</title>
      </Head>
      <main>
        <Navbar />
        <Header />
        <Proof />
        <AboutLazy />
        <ServicesLazy />
        <BioLazy />
        <ReviewsLazy />
        <ContactLazy />
        {/* <InsurancesLazy /> */}
        <FooterLazy />
      </main>
    </>
  );
}

export default Home;
