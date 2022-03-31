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
