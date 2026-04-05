"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TopFrame() {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full bg-purple-600/10 border-b border-white/[0.03] backdrop-blur-3xl py-3 px-6 relative z-[100]"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
          <p className="text-[10px] font-black uppercase tracking-[3px] text-purple-400">
            Open Source frontend Template
          </p>
        </div>
        
        <p className="text-[9px] font-medium text-slate-500 uppercase tracking-widest hidden md:block">
          You are free to edit, distribute, and enhance this next.js code
        </p>

        <a 
          href="https://github.com/Dezinet/itportfolio2026" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px] font-black text-white hover:text-purple-400 transition-colors uppercase tracking-[2px] border-b border-white/20 hover:border-purple-400/50 pb-0.5 ml-0 sm:ml-4"
        >
          <i className="bi bi-github"></i>
          GITHUB REPO
        </a>
      </div>
    </motion.div>
  );
}
