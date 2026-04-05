"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ProjectGrid from "@/components/sections/ProjectGrid";
import projectsData from "@/content/projects/data.json";

export default function BestWork() {
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <section className="w-full py-24 px-6 max-w-7xl mx-auto space-y-24 border-b border-white/[0.03]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 text-center md:text-left">
        <div className="space-y-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black tracking-tightest uppercase leading-none">
              SELECTED WORKS.
            </h2>
          </Reveal>
          <p className="text-slate-500 text-lg font-medium tracking-tight max-w-xl mx-auto md:mx-0">
            A curation of my most complex engineering projects — from distributed systems to AI resilience.
          </p>
        </div>
        <Link 
          href="/projects" 
          className="mx-auto md:mx-0 text-purple-400 font-black hover:text-white transition-all text-[11px] tracking-[3px] uppercase border-b border-purple-400/10 pb-4 flex items-center gap-4 group"
        >
          VIEW ALL PROJECTS 
          <i className="bi bi-arrow-right transition-transform group-hover:translate-x-2"></i>
        </Link>
      </div>

      <ProjectGrid projects={featuredProjects} />
    </section>
  );
}


