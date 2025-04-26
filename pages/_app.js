import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import PageTransition from "../components/page-transition/page-transition";

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    // Lock body during transitions
    const handleRouteChange = () =>
      document.body.classList.add("transition-lock");
    const handleRouteComplete = () =>
      document.body.classList.remove("transition-lock");

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={router.route}>
        <Component {...pageProps} />
      </PageTransition>
    </AnimatePresence>
  );
}
