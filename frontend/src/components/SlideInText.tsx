'use client';

import { motion } from "framer-motion";
import React from "react";

interface SlideInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export default function SlideTitle({ children, delay = 0, duration = 0.8 }: SlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SlideSubTitle({ children, delay = 0, duration = 1.2 }: SlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SlideButton({ children, delay = 0, duration = 1.2 }: SlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}