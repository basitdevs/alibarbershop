"use client";
import { motion } from "framer-motion";
import { ReactElement } from "react";

const Fade = ({
  children,
  delay,
}: {
  children: ReactElement;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
          delay: delay ? delay : 0.2,
        },
      }}
      viewport={{once:true}}
    >
      {children}
    </motion.div>
  );
};
export default Fade;
