import { motion } from "framer-motion";
import { useEffect } from "react";

const PageTransition = ({ children }) => {
  useEffect(() => {
    return () => {
      document.body.classList.add("changing-route");
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1], // Nice easing curve
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
