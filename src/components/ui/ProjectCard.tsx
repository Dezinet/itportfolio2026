"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  impact?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] group-hover:border-purple-600/30 transition-all flex flex-col gap-8 shadow-[0_0_80px_rgba(255,255,255,0.01)] group-hover:shadow-purple-600/5 h-full backdrop-blur-3xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/5 blur-[100px] group-hover:bg-purple-600/10 transition-all duration-700 pointer-events-none"></div>

          {/* Image Area */}
          <div className="aspect-[1.5] rounded-[1.8rem] bg-slate-900/50 overflow-hidden relative border border-white/5 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
            )}
            <div className="absolute top-6 left-6 py-1.5 px-5 bg-purple-600/80 backdrop-blur-md text-white text-[9px] font-black rounded-full tracking-widest uppercase shadow-lg shadow-purple-600/20 z-10">
              {project.category}
            </div>
          </div>

          {/* Content Area */}
          <div className="space-y-6 flex-1 flex flex-col justify-between relative z-10">
            <div className="space-y-3">
              <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-purple-400 transition-colors flex items-center justify-between">
                {project.title}
                <i className="bi bi-arrow-right text-lg opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0 text-purple-400"></i>
              </h3>
              <p className="text-slate-400 text-base leading-relaxed font-medium line-clamp-2">
                {project.desc}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-black text-slate-500 py-1.5 px-3 border border-white/5 rounded-full uppercase group-hover:text-slate-300 group-hover:border-purple-600/20 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
