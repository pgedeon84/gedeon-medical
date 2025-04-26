import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import Head from "next/head";
import PageTransition from "../components/page-transition/page-transition";

function MyApp({ Component, pageProps, router }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wait for EVERYTHING (fonts, CSS, DOM)
    const showPage = async () => {
      await document.fonts.ready;
      const html = document.documentElement;
      html.classList.remove("no-js");
      html.classList.add("visible");
      // Optional: Force reflow to ensure CSS applies
      html.getBoundingClientRect();
    };

    if (document.readyState === "complete") {
      showPage();
    } else {
      window.addEventListener("load", showPage);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="At Gedeon Medical Center..." />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" type="image/svg" href="gmc-favicon.svg" />
      </Head>

      {isMounted ? (
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={router.route}>
            <Component {...pageProps} />
          </PageTransition>
        </AnimatePresence>
      ) : (
        <div style={{ visibility: "hidden" }} />
      )}
    </>
  );
}

export default MyApp;
