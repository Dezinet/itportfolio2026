"use client";

import React from "react";

export default function Marquee() {
  return (
    <div className="w-full py-5 overflow-hidden relative backdrop-blur-3xl border-b border-white/[0.03]">
      <div className="animate-marquee whitespace-nowrap flex space-x-16 px-12 items-center text-white/20 font-bold uppercase tracking-[0.5em] text-[8px]">
        {[1,2,3,4].map(n => (
          <React.Fragment key={n}>
            <span>Full-stack Developer</span>
            <span className="text-slate-800 text-xl">•</span>
            <span>Backend Specialist</span>
            <span className="text-slate-800 text-xl">•</span>
            <span>UI/UX Enthusiast</span>
            <span className="text-slate-800 text-xl">•</span>
            <span>Problem Solver</span>
            <span className="text-slate-800 text-xl">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
