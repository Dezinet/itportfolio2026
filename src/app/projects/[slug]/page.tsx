"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/content/projects/data.json";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-transparent text-slate-100 flex items-center justify-center pt-40 px-6">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-black uppercase tracking-tight">Project Not Found.</h1>
          <Link href="/projects" className="inline-block py-4 px-10 bg-purple-600 rounded-full font-black text-sm uppercase tracking-widest">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const cloneCommand = `git clone https://github.com/user/${project.slug}.git`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-transparent text-slate-100 relative overflow-hidden flex flex-col items-center">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-purple-600/5 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto pt-32 pb-40 px-6 space-y-16">
        
        {/* Breadcrumbs and Header */}
        <section className="space-y-10 border-b border-white/5 pb-12">
          <div className="flex items-center gap-4 text-slate-500 font-bold text-sm tracking-widest uppercase">
            <Link href="/projects" className="hover:text-purple-400 transition-colors">PROJECTS</Link>
            <span className="opacity-30">/</span>
            <span className="text-white">{project.slug}</span>
            <span className="ml-4 py-1 px-3 rounded-full bg-white/5 border border-white/5 text-[9px] font-black text-slate-500 uppercase">Public</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black tracking-tightest leading-none text-white uppercase"
              >
                {project.title}.
              </motion.h1>
              <div className="flex flex-wrap gap-4 pt-4 text-[10px] font-bold text-slate-500 uppercase tracking-[3px]">
                <span className="flex items-center gap-2"><i className="bi bi-calendar-event"></i> {project.year}</span>
                <span className="flex items-center gap-2"><i className="bi bi-tag"></i> {project.category}</span>
                <span className="flex items-center gap-2"><i className="bi bi-code-slash"></i> {project.industry}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="#"
                className="flex items-center gap-4 py-4 px-10 bg-purple-600 border border-purple-600 rounded-2xl text-[10px] font-black uppercase tracking-[4px] text-white hover:bg-purple-500 transition-all shadow-xl shadow-purple-600/20 active:scale-95"
              >
                <i className="bi bi-github text-lg"></i>
                RAW SOURCE CODE
              </a>
            </div>
          </div>
        </section>

        {/* Repository Content Area */}
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Main "README" style column */}
          <div className="lg:col-span-2 space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-[1.8] rounded-[3rem] bg-slate-900 border border-white/5 overflow-hidden relative group shadow-2xl"
            >
              {project.image ? (
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-[1.01] transition-transform duration-1000" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
              )}
            </motion.div>

            <div className="p-12 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 space-y-12 backdrop-blur-xl">
              <div className="space-y-6">
                <h3 className="text-3xl font-black uppercase tracking-tight text-white border-b border-white/5 pb-8 flex items-center gap-4">
                  <i className="bi bi-journal-text text-purple-400"></i>
                  README.md
                </h3>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                  {project.desc}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[3px] text-purple-400">Project Focus</span>
                  <p className="text-slate-500 text-sm leading-relaxed uppercase font-bold tracking-wide">
                    I focused on making this system extremely fast and safe for everyone to use, no matter the scale.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[3px] text-cyan-400">Main Goal</span>
                  <p className="text-slate-500 text-sm leading-relaxed uppercase font-bold tracking-wide">
                    The goal was to solve a hard problem with a simple, clean, and modern piece of technology.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 pt-10 border-t border-white/5">
                <h4 className="text-sm font-black uppercase tracking-[4px] text-white">Project Details</h4>
                <p className="text-slate-500 text-sm leading-loose font-medium uppercase tracking-wider">
                  Every part of this project was designed with care. I used the best tools to make sure it works perfectly on every device. The code is clean, easy to read, and ready for whatever the future brings.
                </p>
              </div>
            </div>
          </div>

          {/* Repository Information Sidebar */}
          <div className="space-y-10 lg:sticky lg:top-32 h-fit">
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-10">
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500">About</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  A premium project built in {project.year}. Designed for high performance and clean user experience.
                </p>
              </div>

              <div className="space-y-6 pt-10 border-t border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-black text-slate-400 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6 pt-10 border-t border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500">Health Score</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-end text-[10px] font-black tracking-widest text-white">
                    <span className="uppercase">RATING</span>
                    <span>{project.complexity * 10}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: `${project.complexity * 10}%` }} 
                      className="h-full bg-purple-600"
                    ></motion.div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-10 border-t border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-[4px] text-slate-500">Clone Repo</h4>
                <div className="bg-black/40 p-5 rounded-2xl border border-white/5 font-mono text-[10px] text-slate-500 flex justify-between items-center group overflow-hidden">
                  <span className="truncate">{cloneCommand}</span>
                  <button 
                    onClick={handleCopy}
                    className="text-purple-400 hover:text-white transition-colors pl-4"
                  >
                    <i className={`bi ${copied ? "bi-check2 text-emerald-400" : "bi-copy"}`}></i>
                  </button>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/projects" className="w-full py-6 rounded-[2rem] border border-white/10 text-[10px] font-black uppercase tracking-[5px] text-slate-500 hover:text-white hover:border-purple-600 transition-all text-center block shadow-2xl">
                   Exit Repository
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
