"use client";

import React from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function TechHub() {
  return (
    <section className="w-full py-24 px-6 max-w-6xl mx-auto space-y-24">
      <div className="text-center space-y-6">
        <Reveal width="100%"><h2 className="text-4xl md:text-8xl font-black tracking-tightest uppercase leading-none mx-auto">THE ENGINE.</h2></Reveal>
        <p className="text-slate-400 text-lg font-medium tracking-tight mx-auto max-w-xl">I use the most reliable and latest tech for every project.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { cat: "FRONTEND", tech: ["NEXT.JS 16", "REAK / TS", "TAILWIND 4"] },
          { cat: "AI & TOOLS", tech: ["PYTHON", "GPT APIS", "LLM AGENTS"] },
          { cat: "BACKEND", tech: ["NODE.JS", "DATABASE", "SYSTEMS"] },
          { cat: "SERVERS", tech: ["AWS / GCP", "DOCKER", "VERCEL"] },
        ].map((stack, i) => (
          <motion.div 
            key={stack.cat}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group glass p-12 rounded-[3.5rem] text-center space-y-8 border border-white/[0.03] hover:border-white/10 transition-all hover:translate-y-[-10px]"
          >
            <h4 className="text-[11px] font-black tracking-[0.6em] text-slate-600 uppercase transition-colors group-hover:text-purple-400">{stack.cat}</h4>
            <div className="flex flex-col gap-6">
              {stack.tech.map(t => (
                <span key={t} className="text-slate-300 font-black text-sm tracking-tight uppercase italic group-hover:text-white transition-colors">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
