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
    <main>
      <Head>
        <title>Gedeon Medical Center | Your path to health!</title>
        <meta
          name="description"
          content="Not feeling well or need an annual medical exam? We do it all! Our doctor also
            perform sports physicals and referrals for injuries. Get Started on your path to health with Gedeon Medical Center."
        />
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
    </main>
  );
}

export default Home;
