import { Navbar, Proof } from "../components";
import Head from "next/head";
import {
  Header,
  About,
  Services,
  Bio,
  Reviews,
  Contact,
  Footer,
} from "../containers";

function Home() {
  return (
    <div>
      <Head>
        <title>Gedeon Medical Center</title>
        <meta
          name="description"
          content="Not feeling well or need an annual medical exam? We do it all! Our doctor also
            perform sports physicals and referrals for injuries. Get Started on your path to health with Gedeon Medical Center."
        ></meta>
      </Head>
      <Navbar />
      <Header />
      <Proof />
      <About />
      <Services />
      <Bio />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
