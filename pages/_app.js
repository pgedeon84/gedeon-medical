import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import Head from "next/head";
import PageTransition from "../components/page-transition/page-transition";

function MyApp({ Component, pageProps, router }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleReady = () => {
      Promise.all([
        document.fonts.ready,
        new Promise((resolve) => {
          if (document.styleSheets.length > 0) resolve();
          else {
            const checkStyles = setInterval(() => {
              if (document.styleSheets.length > 0) {
                clearInterval(checkStyles);
                resolve();
              }
            }, 50);
          }
        }),
      ]).then(() => {
        const html = document.documentElement;
        html.classList.remove("no-js");
        html.classList.add("visible");

        // Force reflow
        html.getBoundingClientRect();

        // Now enable transitions
        html.style.transition = "opacity 400ms ease, visibility 400ms ease";
      });
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
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
