import { motion } from "framer-motion";
import { useEffect } from "react";

const PageTransition = ({ children }) => {
  useEffect(() => {
    // Only make body visible after animation is ready
    const timer = setTimeout(() => {
      document.body.classList.add("visible");
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("visible");
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.15,
      }}
      onAnimationStart={() => {
        document.body.classList.remove("visible");
      }}
      onAnimationComplete={() => {
        document.body.classList.add("visible");
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
