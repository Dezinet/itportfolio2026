"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA({ onOpenChat }: { onOpenChat: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // PDF Only Validation
    if (selectedFile.type !== "application/pdf") {
      setError("Please upload a PDF file only.");
      setFile(null);
      return;
    }

    // 5MB Limit Validation
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("File size exceeds 5MB limit.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setError("");
  };

  return (
    <section className="w-full py-28 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-transparent">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl w-full space-y-24 relative z-10">
        <div className="space-y-6 text-center">
          <Reveal width="100%">
             <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tightest leading-none uppercase bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/10">
               LET'S BUILD<br/>IT FAST.
             </h2>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <p className="text-slate-500 text-lg md:text-xl font-medium tracking-tight max-w-2xl mx-auto">
              Ready to start your next high-scale technical project?
            </p>
          </Reveal>
        </div>

        {/* Technical Global Contact Form */}
        <Reveal delay={0.4} width="100%">
          <form className="glass p-10 md:p-16 rounded-[4rem] border border-white/10 space-y-10 text-left backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.4)]">
            {/* Same form content - correctly centered now */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-[13px] text-white focus:outline-none focus:border-purple-600/50 transition-all font-medium placeholder:text-slate-700" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-[13px] text-white focus:outline-none focus:border-purple-600/50 transition-all font-medium placeholder:text-slate-700" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Mobile Number</label>
                <input type="tel" placeholder="+91 1122334455" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-[13px] text-white focus:outline-none focus:border-purple-600/50 transition-all font-medium placeholder:text-slate-700" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-[13px] text-white focus:outline-none focus:border-purple-600/50 transition-all font-medium placeholder:text-slate-700" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Tell me about your project</label>
              <textarea rows={4} placeholder="I want to build a system that..." className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 text-[13px] text-white focus:outline-none focus:border-purple-600/50 transition-all font-medium placeholder:text-slate-700 resize-none"></textarea>
            </div>

            {/* Elite Attachment Area (PDF only) */}
            <div className="space-y-3 relative">
              <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase ml-2">Project Brief / SRS (PDF, Max 5MB)</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`w-full bg-white/[0.02] border-2 border-dashed ${error ? 'border-red-500/30' : 'border-white/5'} rounded-2xl p-6 flex items-center justify-between cursor-pointer hover:bg-white/[0.04] transition-all`}
              >
                <div className="flex items-center gap-4">
                  <i className={`bi ${file ? 'bi-file-pdf-fill text-red-400' : 'bi-paperclip text-slate-500'} text-xl`}></i>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                    {file ? file.name : "Attach Project Brief"}
                  </span>
                </div>
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">
                  {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : "Choose File"}
                </span>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept=".pdf" 
                  className="hidden" 
                />
              </div>
              {error && <p className="text-[9px] font-bold text-red-500 uppercase tracking-widest ml-2 animate-pulse">{error}</p>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(138, 43, 226, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-7 bg-white text-black font-black text-xs md:text-sm tracking-[0.4em] uppercase rounded-full shadow-2xl hover:bg-purple-600 hover:text-white transition-all duration-500"
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </Reveal>


        {/* Sub Links */}
        <div className="flex gap-8 text-[10px] font-black tracking-widest text-slate-600 uppercase justify-center">
          <span className="hover:text-purple-400 cursor-pointer transition-colors">Github</span>
          <span className="text-white/5">•</span>
          <span className="hover:text-purple-400 cursor-pointer transition-colors">LinkedIn</span>
          <span className="text-white/5">•</span>
          <span className="hover:text-purple-400 cursor-pointer transition-colors">your.email@example.com</span>
        </div>
      </div>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-10 flex flex-col items-center gap-4">
        <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
}
