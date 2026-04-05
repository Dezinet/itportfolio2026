"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({ children, width = "fit-content", delay = 0.2 }: { children: React.ReactNode, width?: "fit-content" | "100%", delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
