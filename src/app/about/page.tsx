"use client";

import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import Link from "next/link";

function BackgroundScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#8a2be2" />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 100, 200]} scale={1.8}>
            <MeshDistortMaterial
              color="#4b0082"
              speed={3}
              distort={0.4}
              radius={1}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}

export default function About() {
  return (
    <main className="min-h-screen bg-transparent text-slate-100 relative overflow-hidden flex flex-col">
      <BackgroundScene />
      
      <div className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto space-y-32 flex-1">
        
        {/* Simple Hero Section */}
        <section className="space-y-10 text-center md:text-left grid md:grid-cols-2 items-center gap-20">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-2 px-6 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-[10px] font-black tracking-[4px] uppercase"
            >
              The Person Behind the Code
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-9xl font-black tracking-tightest leading-[0.9] bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-500 uppercase"
            >
              ABOUT<br/>ME.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-2xl text-slate-400 font-medium max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              I build websites and apps that are easy to use, fast to load, and look great on any screen. I love solving hard problems with simple solutions.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="aspect-square rounded-[4rem] bg-gradient-to-br from-purple-600/20 to-transparent border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-purple-600/10 transition-colors duration-700"></div>
            {/* You would put your photo here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="bi bi-person-circle text-[150px] text-white/10 group-hover:text-purple-600/20 transition-all duration-700"></i>
            </div>
          </motion.div>
        </section>

        {/* How I Work Section */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tightest uppercase">How I Work.</h2>
            <p className="text-slate-500 text-lg uppercase tracking-widest font-bold">Simple rules I follow for every project</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Everything Fast", desc: "No one likes waiting. I make sure every button click and page load happens instantly.", icon: "bi-speedometer2" },
              { title: "Easy to Use", desc: "I create designs that anyone can understand. No confusing menus or hard-to-find buttons.", icon: "bi-hand-index-thumb" },
              { title: "Built to Last", desc: "I write clean code that works today and will still be easy to update in the future.", icon: "bi-shield-check" },
            ].map((card, i) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-purple-600/20 transition-all shadow-[0_0_80px_rgba(255,255,255,0.01)] hover:shadow-purple-600/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-600/10 flex items-center justify-center text-3xl text-purple-600 mb-8 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                  <i className={`bi ${card.icon}`}></i>
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{card.title}</h3>
                <p className="text-slate-500 text-base font-medium leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What I Know Section */}
        <section className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black tracking-tightest uppercase leading-none">What I Use<br/>To Build.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                I use the best tools available today to create modern websites. Here are the main things I work with every day.
              </p>
            </div>
            
            <div className="grid gap-6">
              {[
                { name: "Building Websites", tools: ["React", "Next.js", "Tailwind CSS", "Animations"] },
                { name: "Server Tools", tools: ["Node.js", "Databases", "Cloud", "Security"] },
                { name: "Smart Systems", tools: ["AI Tools", "Smart Search", "Data Organization"] },
              ].map((item) => (
                <div key={item.name} className="space-y-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-[10px] font-black tracking-[4px] text-purple-600 uppercase">{item.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map(t => (
                      <span key={t} className="px-5 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-black text-slate-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-600/30 transition-all uppercase cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-10 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative glass p-12 rounded-[4rem] border border-white/10 space-y-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase text-white">Daily Goals</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Things I try to achieve in every project I start.</p>
              </div>
              <ul className="space-y-6">
                {[
                  "Make complex ideas look simple",
                  "Create fast and clean user screens",
                  "Write code that helps businesses grow",
                  "Keep learning new and better ways"
                ].map((goal, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-slate-300 font-bold uppercase text-xs tracking-widest"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-600 shadow-[0_0_15px_rgba(138,43,226,0.5)]"></div>
                    {goal}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="space-y-24 py-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-7xl font-black tracking-tightest uppercase">My Story.</h2>
            <p className="text-slate-500 text-lg uppercase tracking-widest font-bold">A look back at how I got here</p>
          </div>
          
          <div className="max-w-4xl mx-auto relative px-6">
            <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-purple-600/0 via-purple-600/50 to-purple-600/0"></div>
            
            <div className="space-y-20">
              {[
                { year: "2026", title: "Building the Future", desc: "Today I focus on making the web a better place for everyone using smart tools and safe code." },
                { year: "2024", title: "Growing My Skills", desc: "I worked with large companies to help them fix their slow websites and improve their systems." },
                { year: "2022", title: "Where It Started", desc: "This is when I first started building full-scale apps and fell in love with clean design." },
              ].map((item, i) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"} relative`}
                >
                  <div className="flex-1 w-full">
                    <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-purple-600/30 hover:bg-purple-600/[0.02] transition-all">
                      <span className="text-purple-500 font-bold text-sm tracking-[5px] uppercase">{item.year}</span>
                      <h4 className="text-2xl font-black mt-4 mb-4 uppercase text-white">{item.title}</h4>
                      <p className="text-slate-500 text-base leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-[23px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_30px_rgba(138,43,226,0.8)] z-10 border-4 border-black"></div>
                  <div className="hidden md:block flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-40 border-t border-white/[0.03]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-black tracking-tightest leading-[0.9] uppercase">
              Want to<br/> <span className="text-purple-600">Work Together?</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto uppercase tracking-wide">
              I am always looking for new and exciting projects to work on. Let's talk about yours.
            </p>
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center py-6 px-16 bg-purple-600 text-white font-black text-sm rounded-full overflow-hidden transition-all shadow-[0_0_50px_rgba(138,43,226,0.3)] hover:shadow-purple-600/50 uppercase tracking-[4px]"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative">Say Hello</span>
            </Link>
          </motion.div>
        </section>
        
      </div>
    </main>
  );
}
