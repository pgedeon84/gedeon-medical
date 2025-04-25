import { motion } from "framer-motion";
import { useEffect } from "react";

const PageTransition = ({ children }) => {
  useEffect(() => {
    // Make page visible when component mounts
    document.body.classList.add("visible");

    return () => {
      // Optional: Only needed if you want to reset during route changes
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
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
