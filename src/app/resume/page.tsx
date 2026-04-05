"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const experiences = [
    {
      company: "The Tech Group",
      role: "Lead Systems Architect",
      period: "2024 - Present",
      desc: "I lead a team of 10 people building smart cloud systems. I make sure everything runs fast and never breaks.",
      achievements: [
        "Reduced system costs by 40% with smarter cloud use.", 
        "Built an AI tool that saves 20 hours of manual work every week.",
        "Created a zero-downtime system that survived a massive user surge."
      ]
    },
    {
      company: "Creative Apps Studio",
      role: "Senior Full Stack Builder",
      period: "2022 - 2024",
      desc: "I built modern websites and mobile apps for international clients. I focused on clean design and fast performance.",
      achievements: [
        "Launched 15+ successful apps in just two years.", 
        "Improved database speed by 2x for a large e-commerce client.",
        "Mentored 5 junior developers to help them grow their skills."
      ]
    },
    {
      company: "Startup Hub",
      role: "Junior Web Builder",
      period: "2020 - 2022",
      desc: "I started my journey here building simple and effective landing pages and internal tools for small businesses.",
      achievements: [
        "Automated client reporting so it takes seconds, not hours.", 
        "Fixed critical security bugs that protected 100,000+ users.",
        "Helped design the company's first internal style guide."
      ]
    }
  ];

  const education = [
    {
      school: "University of Technology",
      degree: "Computer Science and Design",
      year: "2016 - 2020",
      desc: "Focused on how people interact with computers and how to build safe systems. Graduated at the top of the class."
    }
  ];

  const skills = [
    { category: "Building Stuff", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Animations", "Vite"] },
    { category: "Server Side", tools: ["Node.js", "SQL & NoSQL", "Secure APIs", "Cloud Infrastructure", "Docker", "Serverless"] },
    { category: "Smart Tech", tools: ["AI Model Tuning", "Vector Search", "Real-time Data", "Speed Optimization", "Security Audits"] }
  ];

  const certifications = [
    { name: "Master Cloud Architect", issuer: "Cloud Academy", year: "2025" },
    { name: "AI Systems Specialist", issuer: "Future Tech Inst.", year: "2024" },
    { name: "Full-Stack Lead Expert", issuer: "Design Guild", year: "2023" }
  ];

  const sideProjects = [
    { name: "QuickEdit AI", desc: "A browser tool that fixes grammar in real time.", link: "#" },
    { name: "EcoTrack", desc: "An app that helps users track their carbon footprint.", link: "#" }
  ];

  return (
    <main className="min-h-screen bg-transparent text-slate-100 pt-40 pb-20 px-6 overflow-hidden relative flex flex-col items-center">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-gradient-to-b from-purple-600/10 to-transparent blur-[150px] pointer-events-none opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-24">
        
        {/* Simple Header */}
        <section className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-2 px-6 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-[10px] font-black tracking-[4px] uppercase"
          >
            My Background and Skills
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-black tracking-tightest leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-600 uppercase"
          >
            RESUME.
          </motion.h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex gap-4">
              <button className="py-4 px-10 rounded-full bg-purple-600 text-white font-black text-[10px] uppercase tracking-widest shadow-xl shadow-purple-600/20 hover:bg-purple-500 transition-all flex items-center gap-3">
                <i className="bi bi-download"></i> Download PDF
              </button>
              <button className="py-4 px-10 rounded-full border border-white/10 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-white hover:border-purple-600 transition-all">
                Print Version
              </button>
            </div>
            <div className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">
               Last Updated: <span className="text-slate-300">April 2026</span>
            </div>
          </div>
        </section>

        {/* Resume Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Main (Left) Column */}
          <div className="lg:col-span-2 space-y-24">
            
            {/* Work Experience */}
            <div className="space-y-12">
               <h2 className="text-2xl font-black uppercase tracking-widest text-white border-b border-white/5 pb-6 flex items-center gap-4">
                 <span className="w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_15px_rgba(138,43,226,0.6)]"></span>
                 Where I Worked
               </h2>
               
               <div className="space-y-24">
                  {experiences.map((exp, i) => (
                    <motion.div 
                      key={exp.company}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative"
                    >
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
                           <div className="space-y-1">
                              <h3 className="text-3xl font-black text-white group-hover:text-purple-400 transition-colors uppercase">{exp.role}</h3>
                              <p className="text-slate-500 font-black text-[10px] tracking-[3px] uppercase">{exp.company}</p>
                           </div>
                           <span className="py-1.5 px-4 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">{exp.period}</span>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed font-medium">
                          {exp.desc}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 pt-4">
                           {exp.achievements.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-purple-600/10 transition-colors">
                                 <i className="bi bi-lightning-charge-fill text-purple-600 mt-0.5"></i>
                                 <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-loose">
                                   {item}
                                 </span>
                              </div>
                           ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>

            {/* Speaking and Writing */}
            <div className="space-y-12">
               <h2 className="text-2xl font-black uppercase tracking-widest text-white border-b border-white/5 pb-6 flex items-center gap-4">
                 <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)]"></span>
                 Featured Projects
               </h2>
               <div className="grid md:grid-cols-2 gap-6">
                  {sideProjects.map((p, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-emerald-600/30 transition-all group">
                       <h4 className="text-xl font-black text-white uppercase group-hover:text-emerald-400 transition-colors mb-3">{p.name}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{p.desc}</p>
                       <a href={p.link} className="text-[10px] font-black text-emerald-400 uppercase tracking-[4px] hover:translate-x-2 transition-transform inline-block">View Case Study &rarr;</a>
                    </div>
                  ))}
               </div>
            </div>

            {/* Education */}
            <div className="space-y-12">
                <h2 className="text-2xl font-black uppercase tracking-widest text-white border-b border-white/5 pb-6 flex items-center gap-4">
                   <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]"></span>
                   Education
                </h2>
                <div className="space-y-10">
                   {education.map((edu) => (
                     <div key={edu.school} className="space-y-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                           <h3 className="text-2xl font-black text-white uppercase">{edu.degree}</h3>
                           <span className="py-1.5 px-4 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-slate-500 uppercase tracking-[4px]">{edu.year}</span>
                        </div>
                        <p className="text-slate-500 font-black uppercase text-[10px] tracking-[3px] text-cyan-400">{edu.school}</p>
                        <p className="text-slate-400 text-base leading-relaxed font-medium">{edu.desc}</p>
                     </div>
                   ))}
                </div>
            </div>

          </div>

          {/* Sidebar Skills & Info */}
          <div className="space-y-12">
             <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-12 backdrop-blur-xl sticky top-32">
                
                {/* Tech Skills */}
                <div className="space-y-8">
                   <h2 className="text-[10px] font-black uppercase tracking-[5px] text-slate-500 border-b border-white/5 pb-4">Special Skills</h2>
                   <div className="space-y-12">
                      {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="space-y-6">
                           <h4 className="text-[9px] font-black tracking-[3px] text-purple-400 uppercase">{skillGroup.category}</h4>
                           <div className="flex flex-wrap gap-2">
                              {skillGroup.tools.map(tool => (
                                <span key={tool} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[9px] font-black text-slate-500 hover:text-white hover:border-purple-600 transition-all uppercase">{tool}</span>
                              ))}
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Awards */}
                <div className="space-y-8 pt-12 border-t border-white/5">
                   <h2 className="text-[10px] font-black uppercase tracking-[5px] text-slate-500 border-b border-white/5 pb-4">Certifications</h2>
                   <div className="space-y-8">
                      {certifications.map((cert) => (
                        <div key={cert.name} className="space-y-2">
                           <h4 className="text-[10px] font-black text-white uppercase tracking-wider leading-tight">{cert.name}</h4>
                           <div className="flex justify-between items-center text-[8px] font-black tracking-widest uppercase">
                              <span className="text-purple-600">{cert.issuer}</span>
                              <span className="text-slate-600">{cert.year}</span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Status Section */}
                <div className="pt-8">
                   <div className="w-full text-center p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-600/20 to-transparent border border-white/5 space-y-4">
                      <div className="flex justify-center">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                      </div>
                      <div>
                        <span className="text-[11px] font-black tracking-[4px] text-purple-400 uppercase block mb-1">Current Status</span>
                        <p className="text-white font-black text-xs uppercase tracking-wide">Available for Full-time Roles</p>
                      </div>
                   </div>
                </div>

                {/* Contact Brief */}
                <div className="space-y-6 pt-12 border-t border-white/5">
                   <h2 className="text-[10px] font-black uppercase tracking-[5px] text-slate-500 border-b border-white/5 pb-4">Quick Connect</h2>
                   <div className="space-y-4 font-black uppercase text-[10px] tracking-widest text-slate-400">
                      <p className="flex items-center gap-3 hover:text-purple-400 transition-colors cursor-pointer"><i className="bi bi-envelope text-purple-600"></i> hello@yourname.dev</p>
                      <p className="flex items-center gap-3 hover:text-purple-400 transition-colors cursor-pointer"><i className="bi bi-geo-alt text-purple-600"></i> San Francisco, CA</p>
                   </div>
                </div>

             </div>
          </div>

        </div>

        {/* Footer Note */}
        <section className="text-center py-20 pb-40">
           <p className="text-slate-600 font-black tracking-[5px] text-[10px] uppercase opacity-40">
             Building the future one line of code at a time.
           </p>
        </section>
        
      </div>
    </main>
  );
}
