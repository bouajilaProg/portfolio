"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}
