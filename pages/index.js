import { Navbar, Proof } from "../components";
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
