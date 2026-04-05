"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, Float } from "@react-three/drei";

function ContactScene() {
  const ref = useRef<any>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1.5} floatIntensity={2}>
      <Torus ref={ref} args={[2.5, 0.4, 16, 100]} scale={1.3}>
        <meshStandardMaterial
          color="#111"
          wireframe
          emissive="#8a2be2"
          emissiveIntensity={0.3}
          transparent
          opacity={0.2}
        />
      </Torus>
    </Float>
  );
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-transparent text-slate-100 pt-40 pb-20 px-6 overflow-hidden relative flex flex-col items-center">
      
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#8a2be2" />
          <ContactScene />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-24">
        
        {/* Header Section */}
        <section className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-2 px-6 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-[10px] font-black tracking-[4px] uppercase"
          >
            Let's Start a Conversation
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-black tracking-tightest leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-600 uppercase"
          >
            GET IN<br/>TOUCH.
          </motion.h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            I am always happy to help with new projects or just chat about technology. Choose a way to connect below.
          </p>
        </section>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info Side */}
          <div className="space-y-16">
            <div className="grid gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-4 group cursor-pointer"
              >
                <span className="text-[10px] font-black text-slate-500 tracking-[5px] uppercase block">Email Me Directly</span>
                <p className="text-3xl md:text-5xl font-black text-white group-hover:text-purple-500 transition-all duration-500 uppercase break-words">
                  hello@example.com
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <span className="text-[10px] font-black text-slate-500 tracking-[5px] uppercase block">Social Links</span>
                <div className="flex flex-wrap gap-6">
                  {[
                    { icon: "bi-github", label: "GitHub", color: "hover:text-white" },
                    { icon: "bi-linkedin", label: "LinkedIn", color: "hover:text-blue-500" },
                    { icon: "bi-twitter-x", label: "Twitter", color: "hover:text-cyan-400" },
                    { icon: "bi-instagram", label: "Instagram", color: "hover:text-pink-500" }
                  ].map((social) => (
                    <a 
                      key={social.label}
                      href="#" 
                      className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-2xl text-slate-400 ${social.color} hover:bg-white/10 transition-all duration-500 border border-white/5`}
                      title={social.label}
                    >
                      <i className={`bi ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="p-10 rounded-[3rem] bg-gradient-to-br from-purple-600/10 to-transparent border border-white/5 space-y-6 relative overflow-hidden backdrop-blur-xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 blur-[50px] rounded-full"></div>
              <h4 className="text-xl font-bold uppercase text-white">Current Status</h4>
              <p className="text-slate-400 text-base leading-relaxed font-medium">
                I am currently taking on new projects for <span className="text-purple-400">2026</span>. If you have an idea, let's talk about it!
              </p>
            </div>
          </div>

          {/* Contact Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group shadow-2xl"
          >
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600/5 blur-[100px] rounded-full group-hover:bg-purple-600/10 transition-all duration-1000"></div>
            
            <div className="space-y-12 relative z-10">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tightest leading-none uppercase">Send a<br/>Message.</h3>
                <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">I will get back to you as soon as possible.</p>
              </div>

              <form className="space-y-10">
                <div className="space-y-4 group/input">
                  <label className="text-[10px] font-black tracking-widest text-slate-500 group-focus-within/input:text-purple-500 transition-colors uppercase">What is your Name?</label>
                  <input 
                    type="text" 
                    placeholder="ENTER YOUR NAME" 
                    className="w-full bg-transparent border-b border-white/10 pb-4 text-xl font-bold text-white focus:outline-none focus:border-purple-600 transition-all placeholder:text-slate-800 uppercase" 
                  />
                </div>

                <div className="space-y-4 group/input">
                  <label className="text-[10px] font-black tracking-widest text-slate-500 group-focus-within/input:text-purple-500 transition-colors uppercase">What is your Email?</label>
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    className="w-full bg-transparent border-b border-white/10 pb-4 text-xl font-bold text-white focus:outline-none focus:border-purple-600 transition-all placeholder:text-slate-800 uppercase" 
                  />
                </div>

                <div className="space-y-4 group/input">
                  <label className="text-[10px] font-black tracking-widest text-slate-500 group-focus-within/input:text-purple-500 transition-colors uppercase">Tell me more</label>
                  <textarea 
                    rows={4} 
                    placeholder="TYPE YOUR MESSAGE HERE..." 
                    className="w-full bg-transparent border-b border-white/10 pb-4 text-xl font-bold text-white focus:outline-none focus:border-purple-600 transition-all placeholder:text-slate-800 resize-none uppercase"
                  ></textarea>
                </div>

                <button className="w-full py-8 bg-purple-600 text-white font-black text-sm rounded-3xl transition-all hover:bg-purple-500 shadow-xl shadow-purple-600/20 active:scale-95 uppercase tracking-[5px]">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

    </main>
  );
}
