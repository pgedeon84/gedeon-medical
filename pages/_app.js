import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import PageTransition from "../components/page-transition/page-transition";

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={router.route}>
        <Component {...pageProps} />
      </PageTransition>
    </AnimatePresence>
  );
}
