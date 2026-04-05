"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Float, MeshDistortMaterial } from "@react-three/drei";
import blogData from "@/content/blog/data.json";

function BlogBoxes() {
  const ref = useRef<any>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={5} rotationIntensity={1} floatIntensity={1}>
      <Box ref={ref} args={[1.5, 1.5, 1.5]} scale={2}>
        <meshStandardMaterial
          color="#111"
          wireframe
          emissive="#8a2be2"
          emissiveIntensity={0.2}
          transparent
          opacity={0.2}
        />
      </Box>
    </Float>
  );
}

export default function Blog() {
  return (
    <main className="min-h-screen bg-transparent text-slate-100 pt-40 pb-20 px-6 overflow-hidden relative flex flex-col items-center">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#8a2be2" />
          <BlogBoxes />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-24">
        
        {/* Simple Header */}
        <section className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-2 px-6 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-[10px] font-black tracking-[4px] uppercase"
          >
            My Thoughts and Ideas
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-black tracking-tightest leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-600 uppercase"
          >
            THE<br/>BLOG.
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            I write about technology, design, and building things for the modern web. Here are my latest posts.
          </p>
        </section>

        {/* Blog Post List */}
        <div className="space-y-8 w-full max-w-5xl mx-auto text-left">
          {blogData.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 md:p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 hover:border-purple-600/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-12 hover:bg-white/[0.01] cursor-pointer shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Decorative Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/[0.03] transition-all duration-700"></div>

              <div className="space-y-6 flex-1 relative z-10">
                <div className="flex items-center gap-6 text-[10px] font-black tracking-[4px] text-slate-500 uppercase">
                   <span className="text-purple-600">{post.cat}</span>
                   <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-purple-600 transition-colors"></span>
                   <span>{post.date}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight group-hover:text-purple-400 transition-all duration-500 uppercase">{post.title}</h3>
                  <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl">{post.desc}</p>
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:bg-purple-600 group-hover:text-white group-hover:translate-x-3 transition-all duration-500 border border-white/5">
                  <i className="bi bi-arrow-right text-3xl"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscribe/Footer */}
        <section className="text-center py-20 pb-40 space-y-12">
           <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
           <p className="text-slate-600 font-black tracking-[5px] text-[10px] uppercase">More stories coming soon.</p>
           <div className="flex justify-center gap-4">
             <a href="#" className="py-4 px-10 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-white hover:border-purple-600 transition-all">Subscribe</a>
           </div>
        </section>

      </div>
    </main>
  );
}
