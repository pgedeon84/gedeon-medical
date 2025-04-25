import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import Head from "next/head";
import PageTransition from "../components/page-transition/page-transition";

function MyApp({ Component, pageProps, router }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      document.body.classList.add("changing-route");
    };

    const handleRouteComplete = () => {
      document.body.classList.remove("changing-route");
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    // Initial load handling
    const html = document.documentElement;
    html.classList.remove("no-js");

    // Wait for styles to load
    const timer = setTimeout(() => {
      html.classList.add("visible");
      document.body.classList.remove("no-js");
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events]);

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
