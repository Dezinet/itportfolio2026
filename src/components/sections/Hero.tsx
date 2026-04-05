"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";


export default function Hero({ onOpenChat }: { onOpenChat: () => void }) {
  return (
    <section className="relative w-full h-[calc(100dvh-80px)] flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden border-b border-white/[0.03] bg-transparent">

      {/* Background is handled globally by Background component in layout.tsx */}

      {/* --- Floating Elite Assets --- */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">

        {/* Prism Asset - Top Left Floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[10%] left-[5%] md:left-[10%] w-[120px] md:w-[220px] aspect-square"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/prism_v2.png"
              alt="Prism V2"
              fill
              quality={100}
              unoptimized
              className="object-contain drop-shadow-[0_0_40px_rgba(138,43,226,0.2)]"
            />
          </motion.div>
        </motion.div>

        {/* Sphere Asset - Right Mid Floating (Behind/By character) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-[20%] right-[10%] md:right-[15%] w-[150px] md:w-[280px] aspect-square"
        >
          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/sphere_v2.png"
              alt="Sphere V2"
              fill
              quality={100}
              unoptimized
              className="object-contain drop-shadow-[0_0_50px_rgba(0,212,255,0.2)]"
            />
          </motion.div>
        </motion.div>

        {/* --- Main Software Architect Character Layer --- */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-0 right-0 md:right-[2%] w-[380px] md:w-[620px] h-full max-h-[85%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full flex items-end justify-center"
          >
            <Image
              src="/pro_engineer.png"
              alt="Architect"
              fill
              quality={100}
              unoptimized
              className="object-contain object-bottom mix-blend-lighten"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content Area - Header Clearance */}
      <div className="relative z-20 w-full max-w-7xl px-4 lg:px-0 flex items-start justify-center lg:justify-start overflow-visible pt-20">
        <div className="max-w-4xl space-y-8 text-center lg:text-left mt-0 pb-10 overflow-visible">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tightest bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white uppercase"
          >
            BUILDING FOR<br />
            SCALE AND<br />
            SPEED.
          </motion.h1>

          <Reveal delay={0.4} width="100%">
            <p className="text-sm md:text-base text-slate-400 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed tracking-tightest uppercase opacity-70">
              Full-stack Developer • System Design • Fast Performance.
            </p>
          </Reveal>

          <Reveal delay={0.6} width="100%">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-6">
              <Link href="/resume" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(138, 43, 226, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-600 text-white font-black py-4 px-12 rounded-full transition-all text-xs tracking-widest uppercase shadow-xl shadow-purple-600/10"
                >
                  RESUME
                </motion.button>
              </Link>

              <button
                onClick={onOpenChat}
                className="w-full sm:w-auto bg-transparent text-white font-black py-4 px-12 rounded-full border border-white/10 transition-all text-xs tracking-widest uppercase backdrop-blur-sm hover:bg-white/5"
              >
                LET'S CHAT
              </button>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 text-lg opacity-30"
      >
        <i className="bi bi-chevron-down"></i>
      </motion.div>
    </section>
  );
}
