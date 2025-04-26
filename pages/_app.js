import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import PageTransition from "../components/page-transition/page-transition";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const handleReady = () => {
      // First make sure fonts are loaded
      document.fonts.ready.then(() => {
        // Then check if stylesheets are loaded
        const styleSheetsLoaded = document.styleSheets.length > 0;

        // If stylesheets aren't loaded yet, wait for them
        if (!styleSheetsLoaded) {
          const interval = setInterval(() => {
            if (document.styleSheets.length > 0) {
              clearInterval(interval);
              showPage();
            }
          }, 50);
          return;
        }

        showPage();
      });
    };

    const showPage = () => {
      const html = document.documentElement;
      html.classList.remove("no-js");
      html.classList.add("visible");
      document.body.classList.remove("no-js");
      document.body.classList.add("visible");

      // Force reflow to ensure styles apply
      html.getBoundingClientRect();
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
    }

    return () => {
      window.removeEventListener("load", handleReady);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={router.route}>
        <Component {...pageProps} />
      </PageTransition>
    </AnimatePresence>
  );
}

export default MyApp;
