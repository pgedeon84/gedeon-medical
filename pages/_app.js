import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import Head from "next/head";
import PageTransition from "../components/page-transition/page-transition";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const handleRouteChange = () => {
      // Ensure body is hidden during route changes
      document.body.classList.remove("visible");
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Remove no-js class and make visible
    const html = document.documentElement;
    html.classList.remove("no-js");
    html.classList.add("visible");

    // Delay body visibility to ensure CSS is loaded
    setTimeout(() => {
      document.body.classList.add("visible");
    }, 50);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="At Gedeon Medical Center..." />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" type="image/svg" href="gmc-favicon.svg" />
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={router.route}>
          <Component {...pageProps} />
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
