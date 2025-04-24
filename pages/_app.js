import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import Head from "next/head";
import PageTransition from "../components/page-transition/page-transition";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="At Gedeon Medical Center our doctors
            perform sports physicals, testosterone replacements, botox injections, fillers and more!"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" type="image/svg" href="gmc-favicon.svg" />
      </Head>

      <AnimatePresence mode="wait">
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
