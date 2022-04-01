import { Navbar, Proof } from "../components";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Header } from "../containers";

const AboutLazy = dynamic(() => import("../containers/about/about"));
const ServicesLazy = dynamic(() => import("../containers/services/services"));
const BioLazy = dynamic(() => import("../containers/bio/bio"));
const ReviewsLazy = dynamic(() => import("../containers/reviews/reviews"));
const ContactLazy = dynamic(() => import("../containers/contact/contact"));
const FooterLazy = dynamic(() => import("../containers/footer/footer"));

function Home() {
  return (
    <main>
      <Head>
        <title>Gedeon Medical Center | Your path to health!</title>
      </Head>
      <Navbar />
      <Header />
      <Proof />
      <AboutLazy />
      <ServicesLazy />
      <BioLazy />
      <ReviewsLazy />
      <ContactLazy />
      <FooterLazy />
    </main>
  );
}

export default Home;
