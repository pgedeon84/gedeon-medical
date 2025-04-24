// components/ui/AnimatedSection.js
import { motion } from "framer-motion";
import { scrollAnimation } from "../../utils/animations";

export default function AnimatedSection({ id, className, children }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={scrollAnimation.viewport}
      variants={scrollAnimation.container}
    >
      {children}
    </motion.section>
  );
}
