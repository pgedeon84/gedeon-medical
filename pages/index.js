import Head from "next/head";
import dynamic from "next/dynamic";
import { Navbar, Proof, NavbarSpacer } from "../components";
import { Header } from "../containers";
import BackToTopButton from "../components/ui/backToTopButton/backToTopButton";

const AboutLazy = dynamic(() => import("../containers/about/about"));
const ServicesLazy = dynamic(() => import("../containers/services/services"));
const BioLazy = dynamic(() => import("../containers/bio/bio"));
const ReviewsLazy = dynamic(() => import("../containers/reviews/reviews"));
const ContactLazy = dynamic(() => import("../containers/contact/contact"));
const FooterLazy = dynamic(() => import("../containers/footer/footer"));
const TermsLazy = dynamic(() => import("../containers/terms/terms"));
const PrivacyLazy = dynamic(() =>
  import("../containers/privacy/privacy-policy")
);

function Home() {
  return (
    <>
      <Head>
        <title>Gedeon Medical Center | Book an appointment</title>
      </Head>
      <main>
        <Navbar />
        <NavbarSpacer />
        <Header />
        <Proof />
        <AboutLazy />
        <ServicesLazy />
        <BioLazy />
        <ReviewsLazy />
        {/* <ContactLazy /> */}
        <TermsLazy />
        <PrivacyLazy />
        <FooterLazy />
      </main>
      <BackToTopButton />
    </>
  );
}

export default Home;
