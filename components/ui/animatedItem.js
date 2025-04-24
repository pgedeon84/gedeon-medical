// components/ui/AnimatedItem.js
import { motion } from "framer-motion";
import { scrollAnimation } from "../../utils/animations";

export default function AnimatedItem({
  children,
  className,
  variant = "item",
  as = "div",
}) {
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      variants={scrollAnimation[variant]}
      viewport={scrollAnimation.viewport}
      whileInView="visible"
      initial="hidden"
    >
      {children}
    </MotionComponent>
  );
}
