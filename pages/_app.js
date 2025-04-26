import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const handleReady = () => {
      document.fonts.ready.then(() => {
        const html = document.documentElement;
        html.classList.remove("no-js");
        html.classList.add("visible");
        document.body.classList.remove("no-js");
        document.body.classList.add("visible");

        // Force reflow to ensure styles apply
        html.getBoundingClientRect();
      });
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
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
