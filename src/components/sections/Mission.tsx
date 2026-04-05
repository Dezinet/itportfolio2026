"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function Mission() {
  return (
    <section className="w-full py-24 px-6 border-b border-white/[0.03] relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
         <div className="space-y-10">
           <Reveal><h2 className="text-4xl md:text-7xl font-black tracking-tightest uppercase leading-none">THE MISSION.</h2></Reveal>
           <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
             I don't just write code; I build systems that actually work and scale. I focus on making things fast, reliable, and easy to maintain.
             <br/><br/>
             I help bridge the gap between complex software and real users. 
           </p>
           <Link href="/about" className="inline-block pt-8 text-purple-400 font-bold hover:text-white transition-all text-xs tracking-widest uppercase border-b border-purple-400/20 pb-4">
             READ MY FULL STORY &rarr;
           </Link>
         </div>
         <div className="relative aspect-square glass rounded-[4rem] border border-white/10 p-16 flex flex-col items-center justify-center text-center space-y-8 group overflow-hidden shadow-2xl shadow-purple-600/5">
            <div className="text-7xl text-purple-600 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-[0_0_50px_rgba(138,43,226,0.3)]"><i className="bi bi-gear-wide-connected"></i></div>
            <div className="space-y-3 relative z-10">
              <h4 className="text-[12px] font-black tracking-[0.5em] text-slate-500 uppercase">EXPERTISE</h4>
              <p className="text-3xl font-black uppercase text-white tracking-tight leading-none">ELITE SOFTWARE</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 rounded-[4rem]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-purple-600/5 blur-[100px]"></div>
         </div>
      </div>
    </section>
  );
}
