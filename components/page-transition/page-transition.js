import { motion } from "framer-motion";
import { useEffect } from "react";

const PageTransition = ({ children }) => {
  useEffect(() => {
    return () => {
      document.body.classList.add("changing-route");
    };
  }, []);

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{
    //     opacity: 1,
    //     y: 0,
    //     transitionEnd: {
    //       display: "block",
    //     },
    //   }}
    //   exit={{
    //     opacity: 0,
    //     y: -20,
    //     transition: { duration: 0.2 },
    //   }}
    //   transition={{
    //     type: "spring",
    //     stiffness: 100,
    //     damping: 20,
    //     duration: 0.2,
    //   }}
    //   onAnimationStart={() => {
    //     document.body.classList.add("animating");
    //   }}
    //   onAnimationComplete={() => {
    //     document.body.classList.remove("animating", "changing-route");
    //   }}
    //   style={{ display: "block" }}
    // >
    //   {children}
    // </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onAnimationStart={() => {
        // Lock scroll during transitions
        document.documentElement.style.overflow = "hidden";
      }}
      onAnimationComplete={() => {
        document.documentElement.style.overflow = "";
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
