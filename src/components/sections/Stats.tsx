"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="w-full py-24 px-6 max-w-6xl mx-auto border-b border-white/[0.03]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
        {[
          { label: "GITHUB WORK", val: "1.2K+" },
          { label: "PROJECTS DONE", val: "24+" },
          { label: "USERS HANDLED", val: "5M+" },
          { label: "FASTER APPS", val: "85%" },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="space-y-2 group"
          >
            <h4 className="text-[10px] font-black text-slate-600 tracking-[0.4em] uppercase group-hover:text-purple-400 transition-colors">{stat.label}</h4>
            <p className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-700">{stat.val}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
