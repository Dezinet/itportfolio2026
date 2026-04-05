"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import labData from "@/content/lab/data.json";

function LabBall() {
  const ref = useRef<any>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <Sphere ref={ref} args={[1, 128, 256]} scale={2.2}>
        <MeshDistortMaterial
          color="#00d4ff"
          speed={3}
          distort={0.45}
          radius={1}
          emissive="#8a2be2"
          emissiveIntensity={0.3}
          transparent
          opacity={0.35}
        />
      </Sphere>
    </Float>
  );
}

export default function Lab() {
  return (
    <main className="min-h-screen bg-transparent text-slate-100 pt-40 pb-20 px-6 overflow-hidden relative flex flex-col items-center">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2.5} color="#8a2be2" />
          <LabBall />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-24">
        
        {/* Simple Header */}
        <section className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-2 px-6 rounded-full bg-cyan-600/10 border border-cyan-600/20 text-cyan-400 text-[10px] font-black tracking-[4px] uppercase"
          >
            Experimenting and Learning
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-black tracking-tightest leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-cyan-500 uppercase"
          >
            THE<br/>PLAYGROUND.
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            This is where I test new ideas, try out cool 3D stuff, and play with new technologies. It is my creative workspace.
          </p>
        </section>

        {/* Experiments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labData.map((lab, i) => (
            <motion.div 
              key={lab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-cyan-600/30 transition-all shadow-[0_0_80px_rgba(255,255,255,0.01)] hover:shadow-cyan-600/10 relative overflow-hidden"
            >
              {/* Dynamic Status Tag */}
              <div className="absolute top-8 right-8 py-1.5 px-4 bg-cyan-600/10 border border-cyan-600/20 rounded-full text-[9px] font-black tracking-widest text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                {lab.status}
              </div>

              <div className="space-y-8">
                <span className="text-[10px] font-black tracking-[4px] text-purple-600 uppercase block">{lab.cat}</span>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black tracking-tight leading-tight group-hover:text-cyan-400 transition-colors uppercase">{lab.title}</h3>
                  <p className="text-slate-500 text-base font-medium leading-relaxed line-clamp-3">{lab.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {lab.tech.map(t => (
                    <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[9px] font-black text-slate-500 group-hover:text-slate-300 transition-all uppercase">{t}</span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-between items-center group-hover:translate-x-2 transition-transform duration-500">
                  <a href="#" className="font-bold text-[10px] tracking-widest uppercase flex items-center gap-3 text-slate-400 group-hover:text-cyan-400 transition-colors">
                    READ MORE <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Empty Space / Coming Soon */}
          <div className="p-10 rounded-[3rem] border border-white/5 flex flex-col items-center justify-center text-center space-y-6 opacity-30 border-dashed group hover:opacity-100 transition-opacity duration-700">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <i className="bi bi-plus-lg text-2xl"></i>
            </div>
            <div className="space-y-2">
              <span className="text-slate-400 font-black tracking-widest uppercase text-[10px]">Next Project</span>
              <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[3px]">Loading soon...</p>
            </div>
          </div>
        </div>

        {/* Closing Quote/Tagline */}
        <section className="text-center py-20 pb-40">
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 0.4 }}
             className="text-slate-500 font-black tracking-[0.5em] text-[11px] uppercase"
           >
             Constantly testing the limits of what is possible.
           </motion.p>
        </section>

      </div>
    </main>
  );
}
