import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PageTransition({ children }) {
  useEffect(() => {
    // Force-clear any transition locks if component unmounts unexpectedly
    return () => document.body.classList.remove("transition-lock");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1], // Natural easing
      }}
    >
      {children}
    </motion.div>
  );
}
